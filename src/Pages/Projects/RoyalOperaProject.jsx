import { Link } from "react-router-dom";
import "./project.css";

export default function RoyalOperaProject() {
  return (
    <div className="project-page">
      <nav className="proj-nav">
        <Link to="/">← Back</Link>
        <span className="sep">/</span>
        <span className="crumb">Royal Opera</span>
      </nav>

      <div className="proj-container">
        <div className="proj-eyebrow">2025 — FastAPI / Streamlit</div>
        <h1 className="proj-title">Royal<br />Opera</h1>
        <p className="proj-subtitle">A digital experience platform for classical arts and opera programming</p>

        <div className="badge-row">
          <span className="badge">Full-Stack</span>
          <span className="badge">FastAPI</span>
          <span className="badge">Streamlit</span>
          <span className="badge">2025</span>
        </div>

        <div className="proj-divider" />

        <div className="proj-section">
          <div className="proj-section-label">Overview</div>
          <p>
            Royal Opera is a web platform built to bring classical arts programming online — making opera, orchestral performances, and cultural events accessible to a broader, digitally-connected audience. The project prioritizes an elegant, immersive presentation that matches the prestige of the art form.
          </p>
          <p>
            Built with FastAPI and a dynamic frontend, the platform handles event scheduling, performer profiles, and multimedia content delivery in a cohesive, visually rich experience.
          </p>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Core Areas</div>
          <div className="card-grid">
            <div className="proj-card">
              <h4>Programme Listings</h4>
              <p>Seasonal opera and orchestral programme pages with performance dates, venues, cast lists, and synopsis entries.</p>
            </div>
            <div className="proj-card">
              <h4>Artist Profiles</h4>
              <p>Dedicated pages for performers and conductors with biographies, upcoming performances, and media galleries.</p>
            </div>
            <div className="proj-card">
              <h4>Digital Archive</h4>
              <p>Historical performance records and press coverage organized in a searchable archive for enthusiasts and researchers.</p>
            </div>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Key Features</div>
          <ul className="feature-list">
            <li><strong>Season Programme:</strong> Complete seasonal listings with filtering by date, genre, and venue</li>
            <li><strong>Artist Directory:</strong> Rich performer profiles with media, biography, and schedule integration</li>
            <li><strong>Event Detail Pages:</strong> Full event breakdowns with cast, creative team, running time, and booking information</li>
            <li><strong>Multimedia Support:</strong> Image galleries and embedded media for previews and highlights</li>
            <li><strong>Performance Archive:</strong> Searchable historical archive of past productions and reviews</li>
          </ul>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Tech Stack</div>
          <div className="tag-cloud">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">Streamlit</span>
            <span className="tech-tag">Uvicorn</span>
            <span className="tech-tag">Pydantic</span>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Highlights</div>
          <div className="metrics-row">
            <div className="proj-metric">
              <div className="metric-val">Elegant</div>
              <div className="metric-lbl">UI Design</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Rich</div>
              <div className="metric-lbl">Media Support</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Archive</div>
              <div className="metric-lbl">Searchable</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Fast</div>
              <div className="metric-lbl">API Backend</div>
            </div>
          </div>
        </div>

        <div className="link-row">
          <p>Work in Progress...</p>
        </div>
      </div>
    </div>
  );
}
