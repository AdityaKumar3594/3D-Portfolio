import React from "react";

export default function Section3(){
    return(
        <section id="section-3">
        <div className="top">
          <div className="left">
            <small>SKILLS</small>
            <h3>
              Crafting scalable <br /> AI solutions <br />& intelligent <br /> software <br /> architectures.
            </h3>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="skills-list">
              <div className="skill-group">
                <span className="skill-label">Languages</span>
                <span className="skill-value">Python · JavaScript · SQL · Java</span>
              </div>
              <div className="skill-group">
                <span className="skill-label">AI / ML</span>
                <span className="skill-value">PyTorch · LangChain · RAG · LLMs · Transformers · FAISS · Ollama · Qwen3</span>
              </div>
              <div className="skill-group">
                <span className="skill-label">Frontend</span>
                <span className="skill-value">React.js · HTML5 · CSS3 · Streamlit</span>
              </div>
              <div className="skill-group">
                <span className="skill-label">Backend</span>
                <span className="skill-value">FastAPI · Node.js · Express.js · REST APIs</span>
              </div>
              <div className="skill-group">
                <span className="skill-label">Databases</span>
                <span className="skill-value">MongoDB · MySQL</span>
              </div>
              <div className="skill-group">
                <span className="skill-label">Cloud & DevOps</span>
                <span className="skill-value">AWS · Docker · Git · GitHub</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="experience-block">
              <small>Experience</small>

              <div className="exp-header">
                <div>
                  <span className="exp-role">AI Engineering Intern</span>
                  <span className="exp-company"> — Indian Navy</span>
                </div>
                <span className="exp-date">Jul 2026 – Aug 2026 · Chennai</span>
              </div>
              <div className="text-columns">
                <p>Built a <strong>Local RAG system</strong> using Python, FastAPI, FAISS, BM25, Ollama, and Qwen3 to enable semantic search with citation-backed responses over confidential organizational documents.</p>
                <p>Developed a <strong>Department-wise Task Monitoring Dashboard</strong> (MERN) with JWT auth, role-based access control, analytics, and progress tracking to improve workflow visibility across departments.</p>
              </div>
            </div>
            <a href="#" className="discover-btn">Download Resume</a>
          </div>
        </div>
      </section>
    )
}