import { Link } from "react-router-dom";

const projects = [
  {
    imgTitle: "tomorrowland",
    eyebrow: "2026 — CVPRW / PYTORCH",
    title: "Nighttime Dehazing",
    path: "/projects/dehazing",
  },
  {
    imgTitle: "navy-pier",
    eyebrow: "2026 — LANGCHAIN / MISTRAL",
    title: "Multi-Agent Research",
    path: "/projects/multi-agent",
  },
  {
    imgTitle: "msi-chicago",
    eyebrow: "2026 — PYTORCH / NLP",
    title: "Plagiarism Detector",
    path: "/projects/plagiarism",
  },
  {
    imgTitle: "phone",
    eyebrow: "2025 — MERN / GENAI",
    title: "Resume AI Coach",
    path: "/projects/resume-ai",
  },
  {
    imgTitle: "kikk",
    eyebrow: "2025 — FASTAPI / STREAMLIT",
    title: "Movie Recommender",
    path: "/projects/movie-recommender",
  },
  {
    imgTitle: "kennedy",
    eyebrow: "2026 — Ongoing",
    title: "Kennedy Club",
    path: "/projects/kennedy-club",
  },
  {
    imgTitle: "opera",
    eyebrow: "2026 — Ongoing",
    title: "Royal Opera",
    path: "/projects/royal-opera",
  },
];

export default function Section2() {
  return (
    <section id="section-2">
      <div className="titles">
        {projects.map(({ imgTitle, eyebrow, title, path }) => (
          <Link
            key={imgTitle}
            to={path}
            img-title={imgTitle}
            className="title"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <small>{eyebrow}</small>
            <h1>{title}</h1>
          </Link>
        ))}
      </div>
    </section>
  );
}
