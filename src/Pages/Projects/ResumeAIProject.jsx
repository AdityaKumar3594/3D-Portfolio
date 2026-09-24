import { Link } from "react-router-dom";
import "./project.css";

export default function ResumeAIProject() {
  return (
    <div className="project-page">
      <nav className="proj-nav">
        <Link to="/">← Back</Link>
        <span className="sep">/</span>
        <span className="crumb">Resume AI Coach</span>
      </nav>

      <div className="proj-container">
        <div className="proj-eyebrow">2025 — MERN / GenAI</div>
        <h1 className="proj-title">Resume AI<br />Coach</h1>
        <p className="proj-subtitle">AI-powered interview preparation and resume optimization platform</p>

        <div className="badge-row">
          <span className="badge">Full-Stack</span>
          <span className="badge">MERN</span>
          <span className="badge">Production</span>
          <span className="badge">Live</span>
        </div>

        <div className="proj-divider" />

        <div className="proj-section">
          <div className="proj-section-label">Overview</div>
          <p>
            Resume Analyzer is a full-stack AI interview prep platform that analyzes a candidate's resume against a job description to generate a tailored interview strategy, skill gap report, and a day-wise readiness roadmap — then produces a polished PDF resume.
          </p>
          <p>
            Built with React 19, Express 5, and MongoDB, the platform handles the complete flow from PDF upload to AI analysis to structured report download — with a hardened API, JWT auth, and CI/CD on Vercel and Render.
          </p>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Problem & Solution</div>
          <div className="card-grid">
            <div className="proj-card">
              <h4>The Challenge</h4>
              <p>Manually mapping job requirements to personal experience is slow and error-prone. Job seekers lack structured tools to identify gaps and prepare targeted interview responses.</p>
            </div>
            <div className="proj-card">
              <h4>The Approach</h4>
              <p>Combine AI analysis, structured reporting, and persistent storage so users can track progress across multiple job applications with a complete history dashboard.</p>
            </div>
            <div className="proj-card">
              <h4>Outcome</h4>
              <p>Live production platform with &lt;2s analysis time, secure JWT auth with token blacklisting, and a full suite of 28 API tests covering all critical paths.</p>
            </div>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Key Features</div>
          <ul className="feature-list">
            <li><strong>AI Interview Report:</strong> Match score, technical + behavioral questions, skill gaps, and a day-wise readiness roadmap powered by Gemini 2.5 Flash</li>
            <li><strong>Resume PDF Generator:</strong> Professional PDF output via Puppeteer/Chromium with cached browser for fast repeat renders</li>
            <li><strong>Secure Authentication:</strong> JWT httpOnly cookies with logout token blacklisting and brute-force rate limiting</li>
            <li><strong>All Reports Dashboard:</strong> Store, compare, and manage previous evaluations with full history</li>
            <li><strong>Hardened API:</strong> Zod validation, Helmet security headers, tiered rate limiting (auth + AI endpoints), OpenAPI docs</li>
            <li><strong>Test Suite:</strong> 28 Jest + Supertest tests with in-memory MongoDB — no API key or network needed in CI</li>
          </ul>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Architecture</div>
          <div className="card-grid">
            <div className="proj-card">
              <h4>Frontend</h4>
              <p>React 19 + Vite, React Router, SCSS, Axios with httpOnly cookie auth. Deployed to Vercel.</p>
            </div>
            <div className="proj-card">
              <h4>Backend</h4>
              <p>Express 5, Mongoose, Multer PDF upload (3MB limit), pdf-parse extraction, Puppeteer PDF generation. Deployed to Render.</p>
            </div>
            <div className="proj-card">
              <h4>AI Layer</h4>
              <p>Google Gemini API with Zod-validated structured output ensures consistent, schema-enforced responses every time.</p>
            </div>
            <div className="proj-card">
              <h4>Data Model</h4>
              <p>MongoDB with users, interview reports, and token blacklist collections. Indexed on user_id and created_at for fast queries.</p>
            </div>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Tech Stack</div>
          <div className="tag-cloud">
            <span className="tech-tag">React 19</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express 5</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">JWT</span>
            <span className="tech-tag">Google Gemini</span>
            <span className="tech-tag">Puppeteer</span>
            <span className="tech-tag">Zod</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">Vercel</span>
            <span className="tech-tag">Render</span>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Results</div>
          <div className="metrics-row">
            <div className="proj-metric">
              <div className="metric-val">Live</div>
              <div className="metric-lbl">Production</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">&lt;2s</div>
              <div className="metric-lbl">Analysis Time</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">28</div>
              <div className="metric-lbl">API Tests</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">JWT+RBAC</div>
              <div className="metric-lbl">Secure Auth</div>
            </div>
          </div>
        </div>

        <div className="link-row">
          <a href="https://resume-analyzer-nine-xi.vercel.app" className="proj-link primary" target="_blank" rel="noreferrer">
            ↗ Live Demo
          </a>
          <a href="https://github.com/AdityaKumar3594/Resume-Analyzer" className="proj-link" target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
