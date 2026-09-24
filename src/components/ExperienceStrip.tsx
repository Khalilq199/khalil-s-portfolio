import { experienceAt } from "@/data/profile";

export default function ExperienceStrip() {
  return (
    <div className="phase-proof" aria-label="Experience at">
      <span className="phase-proof-label">Experience at</span>
      <ul>{experienceAt.map(organization => <li key={organization}>{organization}</li>)}</ul>
    </div>
  );
}
