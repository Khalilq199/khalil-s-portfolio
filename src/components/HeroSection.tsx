import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import EmailCopyButton from "./EmailCopyButton";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  const openResume = () => window.dispatchEvent(new Event("openResumePreview"));

  return (
    <section id="home" className="phase-hero" aria-labelledby="hero-title">
      <div className="phase-hero-copy">
        <p className="phase-hero-meta">Mechatronics Engineering / AI</p>
        <h1 id="hero-title">Khalil<br />Ahmad Qamar</h1>
        <p className="phase-hero-education"><strong>{profile.university}</strong><br />{profile.degree}</p>
        <p className="phase-hero-summary">{profile.summary}</p>
        <div className="phase-hero-actions">
          <button type="button" className="hero-action hero-action-primary" onClick={openResume}>View Resume <ArrowRight size={16} aria-hidden="true" /></button>
          <a className="hero-action" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
          <a className="hero-action" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
          <EmailCopyButton />
        </div>
      </div>
      <div className="phase-hero-art"><HeroVisual /></div>
      <a className="phase-hero-next" href="#experience" aria-label="Go to Experience"><ArrowDown size={15} aria-hidden="true" />Experience</a>
    </section>
  );
}
