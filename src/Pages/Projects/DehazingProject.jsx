import { Link } from "react-router-dom";
import "./project.css";

export default function DehazingProject() {
  return (
    <div className="project-page">
      <nav className="proj-nav">
        <Link to="/">← Back</Link>
        <span className="sep">/</span>
        <span className="crumb">Nighttime Dehazing</span>
      </nav>

      <div className="proj-container">
        <div className="proj-eyebrow">2026 — CVPRW / PyTorch</div>
        <h1 className="proj-title">Nighttime<br />Dehazing</h1>
        <p className="proj-subtitle">Visibility enhancement in low-light hazy conditions</p>

        <div className="badge-row">
          <span className="badge">Research</span>
          <span className="badge">Computer Vision</span>
          <span className="badge">Deep Learning</span>
          <span className="badge">CVPRW 2026</span>
        </div>

        <div className="proj-divider" />

        <div className="proj-section">
          <div className="proj-section-label">Overview</div>
          <p>
            Nighttime haze degradation combines two compounding challenges: low ambient light and scattering particles that distort color channels non-uniformly. Existing dehazing methods are designed for daytime conditions and fail when applied to nighttime scenes due to glow artifacts, artificial light sources, and noise amplification.
          </p>
          <p>
            This work proposes a deep learning pipeline that jointly handles noise suppression and haze removal for nighttime images, targeting autonomous driving and surveillance applications where nighttime visibility is critical.
          </p>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Problem & Approach</div>
          <div className="card-grid">
            <div className="proj-card">
              <h4>The Challenge</h4>
              <p>Daytime dehazing models break under nighttime conditions — artificial light causes glow artifacts, noise amplifies under low-light enhancement, and the atmospheric scattering model no longer holds cleanly.</p>
            </div>
            <div className="proj-card">
              <h4>The Approach</h4>
              <p>A multi-stage network that estimates a nighttime-specific transmission map, suppresses noise via learned priors, then reconstructs a clean, haze-free image with preserved color fidelity.</p>
            </div>
            <div className="proj-card">
              <h4>Contribution</h4>
              <p>Novel nighttime atmospheric scattering model, paired synthetic dataset for training, and a lightweight architecture suitable for real-time inference on edge devices.</p>
            </div>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Key Contributions</div>
          <ul className="feature-list">
            <li><strong>Nighttime Scattering Model:</strong> Extended atmospheric model accounting for multiple light sources and glow artifacts unique to nocturnal scenes</li>
            <li><strong>Joint Denoising & Dehazing:</strong> End-to-end network that avoids error accumulation from sequential processing</li>
            <li><strong>Synthetic Dataset:</strong> Physics-based nighttime haze synthesis pipeline for generating training pairs from clean nighttime images</li>
            <li><strong>CVPRW Submission:</strong> Presented at the CVPR Workshop on Image Restoration and Enhancement 2026</li>
            <li><strong>Benchmark Evaluation:</strong> Evaluated on RESIDE, NH-HAZE, and custom nighttime benchmarks using PSNR, SSIM, and LPIPS</li>
          </ul>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Tech Stack</div>
          <div className="tag-cloud">
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">OpenCV</span>
            <span className="tech-tag">NumPy</span>
            <span className="tech-tag">Matplotlib</span>
            <span className="tech-tag">CUDA</span>
            <span className="tech-tag">Weights & Biases</span>
            <span className="tech-tag">LaTeX</span>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Results</div>
          <div className="metrics-row">
            <div className="proj-metric">
              <div className="metric-val">CVPRW</div>
              <div className="metric-lbl">Published</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">+3.2 dB</div>
              <div className="metric-lbl">PSNR Gain</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Real-Time</div>
              <div className="metric-lbl">Inference</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">3</div>
              <div className="metric-lbl">Benchmarks</div>
            </div>
          </div>
        </div>

        <div className="link-row">
          <a href="https://github.com/AdityaKumar3594/Dehazing---NTIRE-2026" className="proj-link primary" target="_blank" rel="noreferrer">
            ↗ View Code
          </a>
          <a href="https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/html/Ancuti_NTIRE_2026_Nighttime_Image_Dehazing_Challenge_Report_CVPRW_2026_paper.html" className="proj-link" target="_blank" rel="noreferrer">
            Paper
          </a>
        </div>
      </div>
    </div>
  );
}
