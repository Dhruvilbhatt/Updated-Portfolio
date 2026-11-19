import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { LINKS } from "./content";

const NAV = [
  ["work", "work"],
  ["experience", "experience"],
  ["research", "research"],
  ["cli", "cli"],
];

export function SocialLinks() {
  return (
    <div className="socials">
      <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon fontSize="small" /></a>
      <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon fontSize="small" /></a>
      <a href={LINKS.email} aria-label="Email"><EmailIcon fontSize="small" /></a>
    </div>
  );
}

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top"><span className="live-dot" />dhruvil-bhatt</a>
        <nav className="nav-links">
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="nav-right">
          <SocialLinks />
          <a className="btn small" href={LINKS.resume} download="Dhruvil_Bhatt_Resume.pdf">resume.pdf</a>
        </div>
      </div>
    </header>
  );
}

export function SectionHead({ id, index, title, sub }) {
  return (
    <div className="section-head" id={id}>
      <div className="kicker">{index} / {id}</div>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Dhruvil Bhatt</div>
      <SocialLinks />
    </footer>
  );
}
