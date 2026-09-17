import { useState } from 'react'
import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'
import Section1 from './components/section-1'

function App() {

  return (
    <>
      <main>
        <div className="images">
          <img id='tomorrowland' src="/tommorowland.png" alt="" />
          <img id='navy-pier' src="/navy-pier.png" alt="" />
          <img id='msi-chicago' src="/msi-chicago.png" alt="" />
          <img id='phone' src="/phone.png" alt="" />
          <img id='kikk' src="/kikk.png" alt="" />
          <img id='kennedy' src="/kennedy.png" alt="" />
          <img id='opera' src="/opera.png" alt="" />
        </div>

        <Canvas id="canvas-elem" style={{ height: "100vh", width: "100%", position: "fixed", top: 0, left: 0, zIndex: 1 }}>
          <Dog />
        </Canvas>
      <Section1 />
      <section id="section-2">
        <div className="titles">
          <div img-title="tomorrowland" className="title">
            <small>2026 — CVPRW / PYTORCH</small>
            <h1>Nighttime Dehazing</h1>
          </div>
          <div img-title="navy-pier" className="title">
            <small>2026 — LANGCHAIN / MISTRAL</small>
            <h1>Multi-Agent Research</h1>
          </div>
          <div img-title="msi-chicago" className="title">
            <small>2026 — PYTORCH / NLP</small>
            <h1>Plagiarism Detector</h1>
          </div>
          <div img-title="phone" className="title">
            <small>2025 — MERN / GENAI</small>
            <h1>Resume AI Coach</h1>
          </div>
          <div img-title="kikk" className="title">
            <small>2025 — FASTAPI / STREAMLIT</small>
            <h1>Movie Recommender</h1>
          </div>
        </div>
      </section>
      <section id="section-3">
        <div className="top">
          <div className="left">
            <small>EXPERIENCE & SKILLS</small>
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
      <footer id="footer">
        <div className="footer-top">
          <div className="slogan">
            Let's<br/>Build<br/>Something<br/>Great
          </div>
        </div>
        <div className="footer-middle">
          <div className="locations">
            <span>Chennai<span className="dot">.</span></span>
            <span>India<span className="dot">.</span></span>
          </div>
          <div className="socials">
            <a href="https://github.com/AdityaKumar3594" target="_blank" rel="noreferrer">GitHub</a>
            {" / "}
            <a href="https://www.linkedin.com/in/aditya-kumar-snu/" target="_blank" rel="noreferrer">LinkedIn</a>
            {" / "}
            <a href="https://leetcode.com/u/aditya-kumar3594/" target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>
        <div className="footer-bottom-line"></div>
        <div className="footer-bottom">
          <div className="contact">
            <span className="faded">Get in touch</span>
            <span className="dash">—</span>
            <a href="mailto:camp25674@gmail.com" className="email">camp25674@gmail.com</a>
          </div>
          <div className="legal">
            <span className="faded">+91 63061 55698</span>
            <span className="language">Aditya Kumar 2026</span>
          </div>
        </div>
      </footer>
      </main>
    </>
  )
}

export default App
