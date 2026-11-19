import React, { useEffect, useRef, useState } from "react";
import { EDUCATION, EXPERIENCE, HERO, LINKS, PAPERS, REVIEWING, SKILLS, STACK } from "./content";
import { SectionHead } from "./Layout";
import { Window } from "./Panels";

const ext = (href, text) => <a href={href} target="_blank" rel="noreferrer">{text}</a>;

const SMI = `+------------------------------------------------------------------+
| DHRUVIL-SMI            Driver: curiosity       Runtime: espresso |
|-------------------------------+----------------------------------|
| GPU  Workload                 | Util  Notes                      |
|===============================+==================================|
|  0   Triton kernel autotuning |  97%  6-8x faster tuning        |
|  1   vLLM plugin framework    |  91%  15+ model families         |
|  2   Multi-LoRA scheduler     |  88%  GA in 8 AWS regions        |
|  3   Benchmark harness        |  94%  +65% Gemma-3 27B           |
+-------------------------------+----------------------------------+
| Processes: dhruvil (1)   Memory: plenty of room for new problems |
+------------------------------------------------------------------+`;

const COMMANDS = {
  help: () => [
    "available commands:",
    "  whoami       who I am",
    "  work         selected work",
    "  experience   where I've worked",
    "  education    degrees and GPA",
    "  papers       publications and reviewing",
    "  contact      how to reach me",
    "  resume       download my resume",
    "  nvidia-smi   current utilization",
    "  vllm serve   start the server",
    "  clear        clear the screen",
  ],
  whoami: () => [HERO.headline, HERO.blurb, `toolbox: ${SKILLS.join(", ")}`],
  work: () => STACK.map((l) => `${l.layer.padEnd(22)} ${l.title}`),
  experience: () => EXPERIENCE.map((x) => `${x.dates.padEnd(20)} ${x.org}, ${x.role}`),
  education: () => EDUCATION.map((e) => `${e.dates.padEnd(20)} ${e.degree}, ${e.school} (GPA ${e.gpa})`),
  papers: () => [
    ...PAPERS.map((p) => <span>* [{p.venue}] {ext(p.href, p.title)}</span>),
    ...REVIEWING.map((s) => `* ${s.detail}, ${s.title}`),
  ],
  contact: () => [
    <span>email    {ext(LINKS.email, "bhattdb@uci.edu")}</span>,
    <span>linkedin {ext(LINKS.linkedin, "dhruvil-bhatt-uci")}</span>,
    <span>github   {ext(LINKS.github, "Dhruvilbhatt")}</span>,
  ],
  resume: () => [<span>{ext(LINKS.resume, "Dhruvil_Bhatt_Resume.pdf")} (click to open)</span>],
  "nvidia-smi": () => [<pre className="smi">{SMI}</pre>],
  "vllm serve": () => [
    "INFO  model=dhruvil-bhatt  dtype=bfloat16  tensor_parallel_size=1",
    "INFO  loading weights: 4 years of systems work … done",
    "INFO  CUDA graphs captured; KV cache: room for new problems",
    "INFO  Uvicorn running on /v1/hire  (try: contact)",
  ],
  "sudo hire-me": () => ["[sudo] password for recruiter: ********", "access granted. run `contact` to proceed."],
};

const BANNER = ["dhruvil-shell 2.0, type `help` to get started"];

export function Cli() {
  const [lines, setLines] = useState([{ kind: "out", body: BANNER }]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [hIdx, setHIdx] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const run = (raw) => {
    const cmd = raw.trim().replace(/\s+/g, " ");
    if (!cmd) return;
    setHistory((h) => [cmd, ...h]);
    setHIdx(-1);
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const fn = COMMANDS[cmd] || COMMANDS[cmd.toLowerCase()];
    const body = fn ? fn() : [`command not found: ${cmd}. try \`help\``];
    setLines((ls) => [...ls, { kind: "in", body: cmd }, { kind: "out", body }]);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const i = Math.min(hIdx + 1, history.length - 1);
      setHIdx(i);
      setInput(history[i]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = hIdx - 1;
      setHIdx(Math.max(i, -1));
      setInput(i >= 0 ? history[i] : "");
    }
  };

  return (
    <section className="section">
      <SectionHead id="cli" index="04" title="Prefer a terminal?"
        sub="Try help, nvidia-smi, or vllm serve." />
      <Window title="dhruvil@inference: ~" className="cli">
        <div className="cli-body" ref={bodyRef} onClick={() => inputRef.current && inputRef.current.focus()}>
          {lines.map((l, k) => (
            l.kind === "in"
              ? <div key={k} className="cli-in"><span className="prompt">dhruvil@inference:~$</span> {l.body}</div>
              : <div key={k} className="cli-out">{l.body.map((b, j) => <div key={j}>{b}</div>)}</div>
          ))}
          <div className="cli-in">
            <span className="prompt">dhruvil@inference:~$</span>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKeyDown}
              aria-label="terminal input" spellCheck="false" autoComplete="off" />
          </div>
        </div>
        <div className="cli-quick">
          {["help", "whoami", "nvidia-smi", "vllm serve", "contact"].map((c) => (
            <button key={c} onClick={() => run(c)}>{c}</button>
          ))}
        </div>
      </Window>
    </section>
  );
}
