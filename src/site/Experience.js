import React from "react";
import { EDUCATION, EXPERIENCE, TEACHING } from "./content";
import { SectionHead } from "./Layout";

export function Experience() {
  return (
    <section className="section">
      <SectionHead id="experience" index="02" title="Experience" />
      <ol className="xp">
        {EXPERIENCE.map((x) => (
          <li className={`xp-item${x.current ? " current" : x.tags ? " ml" : ""}`} key={x.org + x.dates}>
            <div className="xp-dates">
              {x.dates}
              {x.current && <span className="xp-now">● now</span>}
            </div>
            <div className="xp-body">
              <div className="xp-head">
                <span className="xp-org">{x.org}</span>
                {x.unit && <span className="xp-unit">{x.unit}</span>}
                {x.tags && x.tags.map((t) => <span className="xp-tag" key={t}>{t}</span>)}
              </div>
              <div className="xp-role">{x.role} <span className="dim">· {x.where}</span></div>
              <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
      <div className="edu">
        {EDUCATION.map((e) => (
          <div className="edu-card" key={e.school}>
            <div className="edu-dates">{e.dates}</div>
            <div className="edu-degree">{e.degree}</div>
            {e.minor && <div className="edu-minor">{e.minor}</div>}
            <div className="edu-school">{e.school} <span className="dim">· {e.where}</span></div>
            <div className="edu-gpa">GPA <b>{e.gpa}</b></div>
            <div className="edu-course"><span className="dim">coursework: </span>{e.coursework}</div>
          </div>
        ))}
      </div>
      <div className="xp-teaching">
        <div className="side-title">teaching</div>
        {TEACHING.map((t) => (
          <div className="xp-teach-row" key={t.org}>
            <span className="xp-dates">{t.dates}</span>
            <span><b>{t.org}</b> <span className="dim">· {t.what}</span></span>
          </div>
        ))}
      </div>
    </section>
  );
}
