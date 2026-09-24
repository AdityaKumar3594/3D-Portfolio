import { Link } from "react-router-dom";
import "./project.css";

export default function MultiAgentProject() {
  return (
    <div className="project-page">
      <nav className="proj-nav">
        <Link to="/">← Back</Link>
        <span className="sep">/</span>
        <span className="crumb">Multi-Agent Research</span>
      </nav>

      <div className="proj-container">
        <div className="proj-eyebrow">2026 — LangChain / Mistral</div>
        <h1 className="proj-title">Multi-Agent<br />Research</h1>
        <p className="proj-subtitle">Autonomous research orchestration using collaborative AI agents</p>

        <div className="badge-row">
          <span className="badge">Agentic AI</span>
          <span className="badge">LLM</span>
          <span className="badge">RAG</span>
          <span className="badge">LangChain</span>
        </div>

        <div className="proj-divider" />

        <div className="proj-section">
          <div className="proj-section-label">Overview</div>
          <p>
            Multi-Agent Research is an autonomous research pipeline that coordinates specialized AI agents to search, retrieve, synthesize, and report on complex topics. Each agent has a distinct role — planner, searcher, critic, and writer — communicating through a shared memory layer to produce coherent, cited research outputs.
          </p>
          <p>
            Built on LangChain and powered by Mistral, the system handles multi-hop reasoning tasks where a single-agent approach fails to maintain context and accuracy across long chains of evidence.
          </p>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Agent Architecture</div>
          <div className="card-grid">
            <div className="proj-card">
              <h4>Planner Agent</h4>
              <p>Decomposes user queries into sub-tasks, assigns them to specialized agents, and manages execution order and dependencies.</p>
            </div>
            <div className="proj-card">
              <h4>Research Agent</h4>
              <p>Performs web search and document retrieval using RAG, maintaining a vector store of retrieved chunks for cross-referencing.</p>
            </div>
            <div className="proj-card">
              <h4>Critic Agent</h4>
              <p>Evaluates retrieved information for relevance and contradiction, triggering re-retrieval when confidence is low.</p>
            </div>
            <div className="proj-card">
              <h4>Writer Agent</h4>
              <p>Synthesizes verified facts into structured reports with citations, adapting tone and depth to the query type.</p>
            </div>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Key Features</div>
          <ul className="feature-list">
            <li><strong>Multi-hop Reasoning:</strong> Chains evidence across multiple documents to answer complex, compound questions</li>
            <li><strong>RAG Pipeline:</strong> FAISS vector store with semantic chunking for high-precision retrieval</li>
            <li><strong>Agent Memory:</strong> Shared short-term and long-term memory enabling agents to build on each other's findings</li>
            <li><strong>Self-Critique Loop:</strong> Automatic quality checks with re-planning when outputs don't meet confidence thresholds</li>
            <li><strong>Structured Output:</strong> Reports with section headers, inline citations, and full source provenance</li>
          </ul>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Tech Stack</div>
          <div className="tag-cloud">
            <span className="tech-tag">LangChain</span>
            <span className="tech-tag">LangGraph</span>
            <span className="tech-tag">Mistral</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">FAISS</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">Pydantic</span>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Highlights</div>
          <div className="metrics-row">
            <div className="proj-metric">
              <div className="metric-val">4</div>
              <div className="metric-lbl">Specialized Agents</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Multi-hop</div>
              <div className="metric-lbl">Reasoning</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">RAG</div>
              <div className="metric-lbl">Retrieval</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Cited</div>
              <div className="metric-lbl">Output</div>
            </div>
          </div>
        </div>

        <div className="link-row">
          <a href="https://github.com/AdityaKumar3594" className="proj-link primary" target="_blank" rel="noreferrer">
            ↗ View Code
          </a>
        </div>
      </div>
    </div>
  );
}
