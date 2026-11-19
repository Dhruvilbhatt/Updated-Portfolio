import React from "react";
import avatar from "../assets/avatar.jpg";
import { HERO, LINKS, STATS } from "./content";
import { TokenStream } from "./Panels";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="hero-id">
          <img className="avatar" src={avatar} alt="Dhruvil Bhatt" />
          <div>
            <div className="eyebrow">{HERO.eyebrow}</div>
            <h1>{HERO.name}</h1>
          </div>
        </div>
        <p className="headline">{HERO.headline}</p>
        <p className="blurb">{HERO.blurb}</p>
        <div className="cta">
          <a className="btn" href={LINKS.resume} download="Dhruvil_Bhatt_Resume.pdf">Download resume</a>
          <a className="btn ghost" href={LINKS.vllmBlog} target="_blank" rel="noreferrer">Read my vLLM blog post →</a>
        </div>
      </div>
      <div className="hero-visual">
        <TokenStream />
      </div>
      <div className="numbers">
        {STATS.map((x) => (
          <div className="number" key={x.value}>
            <div className="number-value">{x.value}</div>
            <div className="number-label">{x.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
