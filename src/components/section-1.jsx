import React from "react";

export default function Section1(){
    return(
        <section id="section-1">
        <nav>
          <div className="nav-elem logo" style={{ fontWeight: 800, fontSize: '1.5rem', lineHeight: 1, letterSpacing: '0.05rem' }}>
            ADITYA<br/>KUMAR.
          </div>
          <div className="nav-elem">
            <span style={{ opacity: 0.5, fontSize: '0.75rem', letterSpacing: '0.1rem' }}>
              AI ENGINEER · B.TECH AI & DS · SNU CHENNAI
            </span>
          </div>
          <div className="nav-elem" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
            <a href="https://github.com/AdityaKumar3594" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/aditya-kumar-snu/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://leetcode.com/u/aditya-kumar3594/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LeetCode</a>
          </div>
        </nav>
         <div className="middle">
            <div className="left">
              <h1 style={{ fontSize: '4.5rem' }}>ADITYA <br /> KUMAR <br /> <br /> AI ENGINEER</h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>
                B.Tech in Artificial Intelligence & Data Science — <br />
                Shiv Nadar University, Chennai. <br />
                Building production-ready AI <br />
                systems at the intersection of LLMs and full-stack engineering.
              </p>
            </div>
          </div>
          <div className="first-line"></div>
          <div className="second-line"></div>
      </section>
    );
}