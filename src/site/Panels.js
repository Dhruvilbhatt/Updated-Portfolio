import React, { useEffect, useMemo, useState } from "react";
import { STREAM } from "./content";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq) return undefined;
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange));
  }, []);
  return reduced;
}

export function Window({ title, children, className = "" }) {
  return (
    <div className={`win ${className}`}>
      <div className="win-bar">
        <span className="win-dot r" /><span className="win-dot y" /><span className="win-dot g" />
        <span className="win-title">{title}</span>
      </div>
      <div className="win-body">{children}</div>
    </div>
  );
}

// ---------------- hero: a request being served ----------------
export function TokenStream() {
  const reduced = usePrefersReducedMotion();
  const total = STREAM.tokens.length;
  const [phase, setPhase] = useState("prefill");
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduced) {
      setPhase("done");
      setN(total);
      return undefined;
    }
    let t;
    if (phase === "prefill") t = setTimeout(() => setPhase("decode"), 900);
    else if (phase === "decode") t = n < total ? setTimeout(() => setN(n + 1), 80 + ((n * 37) % 45)) : setTimeout(() => setPhase("done"), 0);
    else t = setTimeout(() => { setN(0); setPhase("prefill"); }, 5000);
    return () => clearTimeout(t);
  }, [phase, n, reduced, total]);

  const started = phase !== "prefill";
  const kv = Math.round(((STREAM.promptTokens + n) / (STREAM.promptTokens + total)) * 64);
  const status = phase === "prefill" ? `prefill · building KV cache for ${STREAM.promptTokens} prompt tokens`
    : phase === "decode" ? `decode · token ${n}/${total}` : "finish_reason=stop";

  return (
    <Window title="vllm serve dhruvil-bhatt --dtype bfloat16" className="win-hero">
      <div className="ts-line"><span className="dim">POST /v1/chat/completions</span></div>
      <div className="ts-line"><span className="pill blue">user</span> {STREAM.prompt}</div>
      <div className="ts-out">
        <span className="pill green">model</span>{" "}
        {STREAM.tokens.slice(0, n).map((tok, k) => (
          <span key={k} className={k % 2 ? "tok b" : "tok a"}>{tok}</span>
        ))}
        {phase !== "done" && <span className="cursor">▍</span>}
      </div>
      <div className="ts-metrics">
        <div><span className="dim">TTFT</span> {started ? "38 ms" : "…"}</div>
        <div><span className="dim">TPOT</span> {started ? "21 ms" : "…"}</div>
        <div><span className="dim">throughput</span> {started ? "1,524 tok/s @ bs=32" : "…"}</div>
      </div>
      <div className="ts-kv">
        <span className="dim">KV cache</span>
        <div className="bar"><div className="bar-fill" style={{ width: `${kv}%` }} /></div>
        <span>{kv}%</span>
      </div>
      <div className="win-status">{status}</div>
    </Window>
  );
}

// ---------------- work: surrogate-guided autotuning ----------------
const TILES = [16, 32, 48, 64, 96, 128, 192, 256];
const G = TILES.length;
const BUDGET = 22;
// synthetic latency surface (illustrative): one basin plus a deterministic ripple
const latency = (i, j) => 1 + 0.06 * ((i - 5) ** 2 * 0.9 + (j - 2) ** 2 * 1.3 + (i - 5) * (j - 2) * 0.4) + ((i * 7 + j * 13) % 5) * 0.03;

function buildSearch() {
  const cells = [];
  for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) cells.push({ i, j, t: latency(i, j) });
  const ts = cells.map((c) => c.t);
  let seed = 11;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const shuffled = [...cells].sort(() => rand() - 0.5);
  const explore = shuffled.slice(0, 9);                                  // spread out first
  const exploit = shuffled.slice(9).sort((a, b) => a.t - b.t);            // then trust the surrogate
  const steps = [...explore, ...exploit.slice(3), ...exploit.slice(0, 3)].slice(0, BUDGET);
  const best = steps.reduce((b, c) => (c.t < b.t ? c : b));
  return { steps, best, bestStep: steps.indexOf(best) + 1, tMin: Math.min(...ts), tMax: Math.max(...ts) };
}

export function Autotuner() {
  const reduced = usePrefersReducedMotion();
  const s = useMemo(buildSearch, []);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduced) {
      setStep(BUDGET);
      return undefined;
    }
    const t = step < BUDGET ? setTimeout(() => setStep(step + 1), 240) : setTimeout(() => setStep(0), 3500);
    return () => clearTimeout(t);
  }, [step, reduced]);

  const seen = new Map(s.steps.slice(0, step).map((c) => [`${c.i},${c.j}`, c]));
  const found = step >= s.bestStep;
  const color = (t) => {
    const x = (t - s.tMin) / (s.tMax - s.tMin);
    return `hsl(${Math.round(135 * (1 - x))}, 68%, ${36 + 14 * (1 - x)}%)`;
  };

  return (
    <Window title="autotune fused_moe --search surrogate --gpu H100" className="win-tuner">
      <div className="heat-wrap">
        <div className="axis-y">BLOCK_M</div>
        <div className="heat-col">
          <div className="heat" style={{ gridTemplateColumns: `repeat(${G}, 1fr)` }}>
            {TILES.map((m, i) => TILES.map((nn, j) => {
              const c = seen.get(`${i},${j}`);
              const best = found && s.best.i === i && s.best.j === j;
              return (
                <div key={`${i}-${j}`} className={`cell${c ? " on" : ""}${best ? " best" : ""}`}
                  style={c ? { background: color(c.t) } : undefined} title={`BLOCK_M=${m} BLOCK_N=${nn}`}>
                  {best ? "★" : ""}
                </div>
              );
            }))}
          </div>
          <div className="axis-x">BLOCK_N →</div>
        </div>
      </div>
      <div className="ts-metrics">
        <div><span className="dim">benchmarked</span> {step}/{G * G}</div>
        <div><span className="dim">best</span> {found ? `${TILES[s.best.i]}×${TILES[s.best.j]} @ step ${s.bestStep}` : "searching…"}</div>
      </div>
      <div className="win-status">illustrative · real spaces: thousands of configs per shape</div>
    </Window>
  );
}

// ---------------- shared loop for the "What I build" visuals ----------------
// counts 0..steps every `ms`, holds the final frame for `hold` ms, then restarts
function useLoop(steps, ms, hold) {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced) {
      setStep(steps);
      return undefined;
    }
    const t = step < steps ? setTimeout(() => setStep(step + 1), ms) : setTimeout(() => setStep(0), hold);
    return () => clearTimeout(t);
  }, [step, steps, ms, hold, reduced]);
  return [step, reduced];
}

// ---------------- traffic: tuned vs. untuned throughput ----------------
export function BenchViz({ bars, note }) {
  const [step, reduced] = useLoop(30, 70, 3200);
  const p = step / 30;
  return (
    <Window title="bench --compare tuned,untuned --latency-slo fixed">
      <div className="lanes">
        {bars.map((b) => {
          const x = parseFloat(b.value.replace(/[^\d.]/g, "")) || 1;
          return (
            <div className="lane-row" key={b.label}>
              <div className="lane-head">
                <span className="dim">{b.label}</span>
                <span className="lane-value">{(x * p).toFixed(2)}x</span>
              </div>
              <div className="lane">
                {!reduced && [0, 1, 2, 3].map((k) => (
                  <span key={k} className="req" style={{ animationDuration: `${3.2 / x}s`, animationDelay: `${(-k * 3.2) / x / 4}s` }} />
                ))}
                <div className="lane-fill" style={{ width: `${b.pct * p}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="win-status">{note} · illustrative traffic, real speedups</div>
    </Window>
  );
}

// ---------------- scheduling: adapter residency vs. KV cache ----------------
const GPU_GB = 80, WEIGHTS_GB = 54, RESERVE_GB = 2, SLOT_GB = 0.6, KV_PER_REQ_GB = 0.35;
const ADAPTERS = [4, 8, 12, 16, 8, 32, 16, 4, 24, 16];                   // trained ranks
const padded = (r) => [8, 16, 32, 64].find((x) => x >= r);
export function LoraViz() {
  const [k] = useLoop(ADAPTERS.length, 420, 2600);
  const kv = GPU_GB - WEIGHTS_GB - RESERVE_GB - k * SLOT_GB;
  const pct = (gb) => `${(gb / GPU_GB) * 100}%`;
  return (
    <Window title="plan --base 27B --adapters 10 --gpu 80GB">
      <div className="mem">
        <div className="mem-seg weights" style={{ width: pct(WEIGHTS_GB) }}>weights</div>
        <div className="mem-seg reserve" style={{ width: pct(RESERVE_GB) }} />
        <div className="mem-seg adapters" style={{ width: pct(k * SLOT_GB) }} />
        <div className="mem-seg kv" style={{ width: pct(kv) }}>KV</div>
      </div>
      <div className="slots">
        {ADAPTERS.map((r, i) => (
          <div key={i} className={`slot${i < k ? " on" : ""}`}>
            <span>A{i + 1}</span>
            <span className="dim">r{r}→{padded(r)}</span>
          </div>
        ))}
      </div>
      <div className="ts-metrics">
        <div><span className="dim">resident</span> {k}/{ADAPTERS.length}</div>
        <div><span className="dim">KV cache</span> {kv.toFixed(1)} GB</div>
        <div><span className="dim">max concurrency</span> {Math.floor(kv / KV_PER_REQ_GB)}</div>
      </div>
      <div className="win-status">more resident adapters, less KV cache, fewer concurrent requests · illustrative</div>
    </Window>
  );
}

// ---------------- serving engine: version-guarded patches ----------------
const VERSIONS = ["0.9.2", "0.10.1", "0.11.0"];
const FAMILIES = ["llama", "deepseek", "qwen", "mistral", "gemma", "phi"];
// status per [version][family]: 2 = patched, 1 = version-specific variant, 0 = fixed upstream, skipped
const STATUS = [[2, 2, 2, 1, 2, 2], [2, 1, 2, 0, 2, 1], [1, 2, 0, 0, 2, 2]];
const LABEL = ["skip: fixed upstream", "patched (variant)", "patched"];
export function PluginViz() {
  const per = FAMILIES.length + 2;
  const [step] = useLoop(VERSIONS.length * per - 1, 260, 2200);
  const v = Math.min(Math.floor(step / per), VERSIONS.length - 1);
  const shown = step - v * per - 1;
  return (
    <Window title="vllm serve --plugins version-aware-extensions">
      <div className="ts-line"><span className="dim">detected</span> vllm=={VERSIONS[v]}</div>
      <div className="patches">
        {FAMILIES.map((f, i) => {
          const s = STATUS[v][i];
          return (
            <div key={f} className={`patch${i < shown ? ` s${s}` : ""}`}>
              <span>{f}</span>
              <span className="patch-status">{i < shown ? LABEL[s] : "…"}</span>
            </div>
          );
        })}
      </div>
      <div className="win-status">15+ families in production; 6 shown · illustrative</div>
    </Window>
  );
}

// ---------------- GPU & memory / HPC: serial vs. parallel ----------------
const PIX = 8;                                                          // 8x8 tiles
const SERIAL_S = 13.65, PARALLEL_S = 0.65;
const plasma = (i, j) => {
  const d = Math.hypot(i - 3.5, (j - 3.5) * 1.3) / 5;
  return `hsl(${Math.round(280 + 90 * (1 - Math.min(d, 1)))}, 85%, ${Math.round(20 + 45 * Math.max(0, 1 - d))}%)`;
};
export function ParallelViz() {
  const total = PIX * PIX;
  const [step] = useLoop(total, 90, 2600);
  const parTicks = Math.ceil(total / 21);                                // ~21x fewer ticks
  const serialDone = step, parallelDone = Math.min(total, Math.round((step / parTicks) * total));
  const grid = (done) => (
    <div className="pix" style={{ gridTemplateColumns: `repeat(${PIX}, 1fr)` }}>
      {Array.from({ length: total }, (_, n) => {
        const i = Math.floor(n / PIX), j = n % PIX;
        return <div key={n} className="px" style={n < done ? { background: plasma(i, j) } : undefined} />;
      })}
    </div>
  );
  return (
    <Window title="synth_plasma --mpi-ranks 4 --omp-threads 4">
      <div className="par">
        <div>
          {grid(serialDone)}
          <div className="par-label"><span className="dim">serial</span> {((serialDone / total) * SERIAL_S).toFixed(2)} s</div>
        </div>
        <div>
          {grid(parallelDone)}
          <div className="par-label"><span className="dim">OpenMP + MPI</span> {((parallelDone / total) * PARALLEL_S).toFixed(2)} s</div>
        </div>
      </div>
      <div className="win-status">21x speedup, 0.65 s per synthetic image (Wiley) · animation illustrative</div>
    </Window>
  );
}
