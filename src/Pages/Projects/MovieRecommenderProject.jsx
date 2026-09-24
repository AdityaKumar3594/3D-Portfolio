import { Link } from "react-router-dom";
import "./project.css";

export default function MovieRecommenderProject() {
  return (
    <div className="project-page">
      <nav className="proj-nav">
        <Link to="/">← Back</Link>
        <span className="sep">/</span>
        <span className="crumb">Movie Recommender</span>
      </nav>

      <div className="proj-container">
        <div className="proj-eyebrow">2025 — FastAPI / Streamlit</div>
        <h1 className="proj-title">Movie<br />Recommender</h1>
        <p className="proj-subtitle">Content-based recommendation engine blending TF-IDF similarity and TMDB metadata</p>

        <div className="badge-row">
          <span className="badge">Machine Learning</span>
          <span className="badge">FastAPI</span>
          <span className="badge">Streamlit</span>
          <span className="badge">Python</span>
        </div>

        <div className="proj-divider" />

        <div className="proj-section">
          <div className="proj-section-label">Overview</div>
          <p>
            A full-stack movie recommendation system that blends a local TF-IDF content-based model with live TMDB metadata. Users can search for movies, browse a rich home feed of trending and top-rated titles, and get similar-movie recommendations — all backed by a FastAPI service and a clean Streamlit UI with poster imagery.
          </p>
          <p>
            The hybrid approach gives the best of both worlds: offline similarity from the local model (no rate limits, low latency) and genre diversity from TMDB's discover API for a wider recommendation pool.
          </p>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">System Design</div>
          <div className="card-grid">
            <div className="proj-card">
              <h4>FastAPI Backend</h4>
              <p>RESTful API serving home feeds, search results, movie details, and recommendation endpoints. Loads TF-IDF artifacts on startup for fast inference.</p>
            </div>
            <div className="proj-card">
              <h4>TF-IDF Model</h4>
              <p>Pickled TF-IDF matrix and cosine similarity index built over movie overviews, genres, and cast metadata from a local dataset.</p>
            </div>
            <div className="proj-card">
              <h4>TMDB Integration</h4>
              <p>Live TMDB API for posters, backdrops, overview enrichment, and genre-based discovery recommendations beyond the local dataset.</p>
            </div>
            <div className="proj-card">
              <h4>Streamlit Frontend</h4>
              <p>Interactive UI with keyword search, home feed sections (trending, popular, top rated, upcoming), and a detail view with poster and synopsis.</p>
            </div>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Key Features</div>
          <ul className="feature-list">
            <li><strong>Keyword Search:</strong> TMDB-powered search with instant suggestions and poster grid results</li>
            <li><strong>TF-IDF Recommendations:</strong> Content-based similar-title suggestions from the local model with no API overhead</li>
            <li><strong>Genre Recommendations:</strong> TMDB discover-based genre suggestions for variety beyond the training data</li>
            <li><strong>Home Feed:</strong> Curated sections — trending, popular, top rated, now playing, upcoming</li>
            <li><strong>Movie Detail View:</strong> Overview, genres, backdrop image, and combined recommendation panels</li>
          </ul>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">API Endpoints</div>
          <ul className="feature-list">
            <li><strong>GET /home:</strong> Category-based home feed (popular, top_rated, trending, etc.)</li>
            <li><strong>GET /tmdb/search:</strong> Keyword movie search via TMDB</li>
            <li><strong>GET /movie/id/{"{tmdb_id}"}:</strong> Full movie details</li>
            <li><strong>GET /recommend/tfidf:</strong> Local TF-IDF cosine-similarity recommendations</li>
            <li><strong>GET /recommend/genre:</strong> TMDB genre-based discovery recommendations</li>
          </ul>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Tech Stack</div>
          <div className="tag-cloud">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">Streamlit</span>
            <span className="tech-tag">scikit-learn</span>
            <span className="tech-tag">Pandas</span>
            <span className="tech-tag">TMDB API</span>
            <span className="tech-tag">Uvicorn</span>
            <span className="tech-tag">Pickle</span>
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">Highlights</div>
          <div className="metrics-row">
            <div className="proj-metric">
              <div className="metric-val">TF-IDF</div>
              <div className="metric-lbl">Local Model</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Hybrid</div>
              <div className="metric-lbl">Recommendation</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">5+</div>
              <div className="metric-lbl">API Endpoints</div>
            </div>
            <div className="proj-metric">
              <div className="metric-val">Live</div>
              <div className="metric-lbl">TMDB Data</div>
            </div>
          </div>
        </div>

        <div className="link-row">
          <a href="https://github.com/AdityaKumar3594/movie-recommender-system" className="proj-link primary" target="_blank" rel="noreferrer">
            ↗ View Code
          </a>
          <a href="https://movie-recommender-system-pqst8w29bgzp4jhdskaced.streamlit.app/" className="proj-link primary" target="_blank" rel="noreferrer">
            ↗ Demo
          </a>
        </div>
      </div>
    </div>
  );
}
