import React, { useState } from "react";
import { STACK } from "./content";
import { SectionHead } from "./Layout";
import { Autotuner, BenchViz, LoraViz, ParallelViz, PluginViz } from "./Panels";

function Visual({ layer }) {
  switch (layer.visual) {
    case "bench": return <BenchViz bars={layer.bars} note={layer.note} />;
    case "lora": return <LoraViz />;
    case "plugin": return <PluginViz />;
    case "autotuner": return <Autotuner />;
    case "parallel": return <ParallelViz />;
    default: return null;
  }
}

export function Stack() {
  const [active, setActive] = useState("kernels");
  const layer = STACK.find((l) => l.id === active);

  return (
    <section className="section">
      <SectionHead id="work" index="01" title="What I build"
        sub="A request travels from the client down to the GPU. Pick a layer to see my work there." />
      <div className="stack">
        <div className="stack-layers" role="tablist" aria-label="Inference stack layers">
          <div className="stack-rail"><span className="packet" /></div>
          {STACK.map((l) => (
            <button key={l.id} role="tab" aria-selected={l.id === active}
              className={`layer${l.id === active ? " active" : ""}`} style={{ "--c": l.color }}
              onClick={() => setActive(l.id)}>
              <span className="layer-name">{l.layer}</span>
              <span className="layer-what">{l.what}</span>
            </button>
          ))}
        </div>
        <div className="layer-detail" style={{ "--c": layer.color }} role="tabpanel" key={layer.id}>
          <div className="layer-detail-kicker">{layer.layer.toLowerCase()}</div>
          <h3>{layer.title}</h3>
          <p>{layer.body}</p>
          <div className="facts">{layer.facts.map((f) => <span className="fact" key={f}>{f}</span>)}</div>
          <div className="detail-visual"><Visual layer={layer} /></div>
          <div className="detail-link">
            {layer.link && <a className="text-link" href={layer.link.href} target="_blank" rel="noreferrer">{layer.link.text} →</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
