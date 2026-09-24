import { Link } from "react-router-dom";
import "./project.css";

export default function KennedyClubProject() {
  return (
    <div className="project-page">
      <nav className="proj-nav">
        <Link to="/">← Back</Link>
        <span className="sep">/</span>
        <span className="crumb">Kennedy Club</span>
      </nav>

      <div className="proj-container">
        <div className="proj-eyebrow">2025 — FastAPI / Streamlit</div>
        <h1 className="proj-title">Kennedy<br />Club</h1>
        <p className="proj-subtitle">A platform built around community, events, and cultural engagement</p>

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
            Kennedy Club is a web platform designed to connect community members through shared events, interests, and local cultural programming. The project focuses on clean user experience, organized information architecture, and a fast, lightweight backend.
          </p>
          <p>
            Built with a FastAPI backend and an interactive frontend, the platform provides event discovery, membership management, and content organization in a streamlined interface.
          </p>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Core Areas</div>
          <div className="card-grid">
            <div className="proj-card">
              <h4>Event Management</h4>
              <p>Browse and discover upcoming club events, filter by category or date, and get detailed event information in one place.</p>
            </div>
            <div className="proj-card">
              <h4>Community Hub</h4>
              <p>Member profiles, activity feeds, and a shared space for announcements and club updates.</p>
            </div>
            <div className="proj-card">
              <h4>Content Organization</h4>
              <p>Structured content pages for club history, galleries, and curated cultural programming archives.</p>
            </div>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Key Features</div>
          <ul className="feature-list">
            <li><strong>Event Discovery:</strong> Filterable event listings with dates, venues, and descriptions</li>
            <li><strong>Membership System:</strong> Member registration and profile management</li>
            <li><strong>Responsive Design:</strong> Optimized for both desktop and mobile browsers</li>
            <li><strong>Fast API Backend:</strong> Lightweight FastAPI service with clean REST endpoints</li>
            <li><strong>Content Management:</strong> Easy-to-update pages for club announcements and news</li>
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
              <div className="metric-val">Fast</div>
              <div className="metric-lbl">API Backend</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Clean</div>
              <div className="metric-lbl">UI Design</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">REST</div>
              <div className="metric-lbl">Architecture</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Mobile</div>
              <div className="metric-lbl">Responsive</div>
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
