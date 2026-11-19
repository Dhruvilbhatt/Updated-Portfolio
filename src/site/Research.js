import React from "react";
import { PAPERS, REVIEWING, SKILLS } from "./content";
import { SectionHead } from "./Layout";

export function Research() {
  return (
    <section className="section">
      <SectionHead id="research" index="03" title="Research & reviewing"
        sub="Before inference I worked on high-performance computing, and the parallel-performance instinct carried over." />
      <div className="research">
        <div className="papers">
          {PAPERS.map((p) => (
            <a className="paper" key={p.title} href={p.href} target="_blank" rel="noreferrer">
              <div className="paper-venue">{p.venue}</div>
              <div className="paper-title">{p.title}</div>
              <div className="paper-authors">{p.authors}</div>
              <div className="paper-note">{p.note}</div>
            </a>
          ))}
        </div>
        <aside className="side">
          <div className="side-block">
            <div className="side-title">reviewing</div>
            {REVIEWING.map((s) => (
              <div className="side-item" key={s.title}><b>{s.title}</b><span className="dim">{s.detail}</span></div>
            ))}
          </div>
          <div className="side-block">
            <div className="side-title">toolbox</div>
            <div className="chips">{SKILLS.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
