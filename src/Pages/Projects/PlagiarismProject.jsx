import { Link } from "react-router-dom";
import "./project.css";

export default function PlagiarismProject() {
  const experiments = [
    {
      label: "Transformer vs. Vision Paper (abstracts)",
      desc: "Attention Is All You Need vs. Canny Edge Detection",
      r: "0.4173",
      sSem: "0.7303",
      sStruct: "0.8219",
      sAlign: "0.0270",
      sCite: "0.0000",
      sCommon: "0.8266",
      verdict: "LOW",
      note: "No citations detected — weights redistributed",
    },
    {
      label: "Original vs. Paraphrased Abstract",
      desc: "Attention Is All You Need vs. its rewrite (abstract only)",
      r: "0.6269",
      sSem: "0.9745",
      sStruct: "0.8915",
      sAlign: "0.3745",
      sCite: "0.0000",
      sCommon: "0.7453",
      verdict: "MEDIUM",
      note: "High semantic + structural similarity surfaces the rewrite",
    },
    {
      label: "Transformer vs. NeRF (full PDFs)",
      desc: "Attention Is All You Need vs. NeRF paper",
      r: "0.3406",
      sSem: "0.6612",
      sStruct: "0.8494",
      sAlign: "0.0000",
      sCite: "0.0000",
      sCommon: "0.8385",
      verdict: "LOW",
      note: "109 citations found — full weights applied",
    },
    {
      label: "Original vs. Full Rewrite (full PDFs)",
      desc: "Attention Is All You Need vs. full-paper rewrite",
      r: "0.7579",
      sSem: "1.0000",
      sStruct: "0.9979",
      sAlign: "1.0000",
      sCite: "0.0000",
      sCommon: "0.8385",
      verdict: "HIGH",
      note: "Perfect semantic + n-gram match flags plagiarism",
    },
  ];

  const verdictStyle = {
    HIGH: { color: "#ef4444", label: "🔴 HIGH RISK" },
    MEDIUM: { color: "#f59e0b", label: "🟡 MEDIUM RISK" },
    LOW: { color: "#22c55e", label: "🟢 LOW RISK" },
  };

  return (
    <div className="project-page">
      <nav className="proj-nav">
        <Link to="/">← Back</Link>
        <span className="sep">/</span>
        <span className="crumb">Plagiarism Detector</span>
      </nav>

      <div className="proj-container">
        <div className="proj-eyebrow">2026 — NLP / PyTorch / C</div>
        <h1 className="proj-title">Academic Plagiarism<br />Detection</h1>
        <p className="proj-subtitle">
          Multi-signal pipeline combining SPECTER embeddings, n-gram alignment,
          and citation analysis for academic integrity at scale.
        </p>

        <div className="badge-row">
          <span className="badge">NLP</span>
          <span className="badge">SPECTER</span>
          <span className="badge">Transformers</span>
          <span className="badge">PyTorch</span>
          <span className="badge">C</span>
          <span className="badge">Streamlit</span>
        </div>

        <div className="proj-divider" />

        {/* Overview */}
        <div className="proj-section">
          <div className="proj-section-label">Overview</div>
          <p>
            Traditional plagiarism detectors rely on lexical matching, which is
            easily circumvented through paraphrasing. This pipeline goes further
            by combining five independent signals — semantic embeddings, structural
            consistency, n-gram alignment, citation overlap, and a common-knowledge
            penalty — into a single calibrated risk score.
          </p>
          <p>
            The backbone is{" "}
            <strong>SPECTER</strong>, a transformer model pre-trained on citation
            graphs, making it especially sensitive to academic concept similarity.
            Low-level alignment and citation counting are handled by compiled C
            executables for performance. A Streamlit web app ties everything
            together with live visualizations and PDF upload support.
          </p>
        </div>

        {/* Pipeline */}
        <div className="proj-section">
          <div className="proj-section-label">Pipeline Components</div>
          <div className="card-grid">
            <div className="proj-card">
              <h4>S_sem — Semantic Similarity</h4>
              <p>
                SPECTER [CLS] cosine similarity over full-document embeddings.
                Catches paraphrasing and idea borrowing regardless of surface
                wording. <strong>α = 0.45</strong>
              </p>
            </div>
            <div className="proj-card">
              <h4>S_struct — Structural Consistency</h4>
              <p>
                Paragraph-level embedding alignment checks whether the logical
                structure of the documents mirrors each other.{" "}
                <strong>β = 0.10</strong>
              </p>
            </div>
            <div className="proj-card">
              <h4>S_align — N-gram Alignment</h4>
              <p>
                6-gram Jaccard overlap via a C executable catches verbatim or
                near-verbatim copying that semantic methods may dilute.{" "}
                <strong>γ = 0.25</strong>
              </p>
            </div>
            <div className="proj-card">
              <h4>S_cite — Citation Score</h4>
              <p>
                C-based citation counter measures reference overlap. When no
                citations are detected the weight is redistributed to the
                remaining signals. <strong>δ = 0.15</strong>
              </p>
            </div>
            <div className="proj-card">
              <h4>S_common — Common Knowledge Penalty</h4>
              <p>
                Boilerplate phrase similarity subtracts shared academic
                background language to avoid false positives.{" "}
                <strong>ε = 0.05</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Formula */}
        <div className="proj-section">
          <div className="proj-section-label">Risk Score Formula</div>
          <div
            className="proj-card"
            style={{ fontFamily: "monospace", fontSize: "1rem", letterSpacing: "0.02em" }}
          >
            R = α·S_sem + β·S_struct + γ·S_align + δ·S_cite − ε·S_common
          </div>
          <div className="metrics-row" style={{ marginTop: "1.25rem" }}>
            <div className="proj-metric">
              <div className="metric-val" style={{ color: "#22c55e" }}>{"< 0.45"}</div>
              <div className="metric-lbl">🟢 LOW RISK</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val" style={{ color: "#f59e0b" }}>0.45 – 0.65</div>
              <div className="metric-lbl">🟡 MEDIUM RISK</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val" style={{ color: "#ef4444" }}>{"≥ 0.65"}</div>
              <div className="metric-lbl">🔴 HIGH RISK</div>
            </div>
          </div>
        </div>

        {/* Experiment Results */}
        <div className="proj-section">
          <div className="proj-section-label">Experiment Results</div>
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {experiments.map((exp) => {
              const v = verdictStyle[exp.verdict];
              return (
                <div className="proj-card" key={exp.label}>
                  <h4 style={{ marginBottom: "0.25rem" }}>{exp.label}</h4>
                  <p style={{ fontSize: "0.8rem", opacity: 0.6, marginBottom: "0.75rem" }}>
                    {exp.desc}
                  </p>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.82rem",
                      lineHeight: "1.8",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "6px",
                      padding: "0.65rem 0.85rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div>
                      <span style={{ opacity: 0.55 }}>Risk Score (R) </span>
                      <strong>{exp.r}</strong>
                    </div>
                    <div>
                      <span style={{ opacity: 0.55 }}>S_sem          </span>
                      {exp.sSem}
                    </div>
                    <div>
                      <span style={{ opacity: 0.55 }}>S_struct       </span>
                      {exp.sStruct}
                    </div>
                    <div>
                      <span style={{ opacity: 0.55 }}>S_align        </span>
                      {exp.sAlign}
                    </div>
                    <div>
                      <span style={{ opacity: 0.55 }}>S_cite         </span>
                      {exp.sCite}
                    </div>
                    <div>
                      <span style={{ opacity: 0.55 }}>S_common       </span>
                      {exp.sCommon}
                    </div>
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: v.color,
                      fontSize: "0.85rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {v.label}
                  </div>
                  <p style={{ fontSize: "0.78rem", opacity: 0.55, margin: 0 }}>{exp.note}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <div className="proj-section">
          <div className="proj-section-label">Key Features</div>
          <ul className="feature-list">
            <li>
              <strong>Multi-signal fusion:</strong> Five independent signals
              combined into one calibrated risk score, resistant to gaming any
              single detector
            </li>
            <li>
              <strong>SPECTER backbone:</strong> Citation-graph pre-training makes
              embeddings especially sensitive to academic concept similarity
            </li>
            <li>
              <strong>C-accelerated alignment:</strong> N-gram Jaccard overlap and
              citation counting compiled as native executables for throughput
            </li>
            <li>
              <strong>Adaptive weight redistribution:</strong> When citations are
              absent the δ weight is automatically spread across remaining signals
            </li>
            <li>
              <strong>Streamlit web app:</strong> Upload two PDFs or paste raw
              text; get a live risk gauge, radar chart, and full score breakdown
            </li>
            <li>
              <strong>BERT comparison:</strong> Alternate pipeline with
              bert-base-uncased benchmarks SPECTER's domain advantage
            </li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="proj-section">
          <div className="proj-section-label">Tech Stack</div>
          <div className="tag-cloud">
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">SPECTER (AllenAI)</span>
            <span className="tech-tag">HuggingFace Transformers</span>
            <span className="tech-tag">Streamlit</span>
            <span className="tech-tag">C (GCC)</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">NumPy</span>
            <span className="tech-tag">pdfminer</span>
          </div>
        </div>

        <div className="link-row">
          <a
            href="https://github.com/AdityaKumar3594/Academic-Plagiarism-Detection"
            className="proj-link primary"
            target="_blank"
            rel="noreferrer"
          >
            ↗ View Code
          </a>
        </div>
      </div>
    </div>
  );
}
