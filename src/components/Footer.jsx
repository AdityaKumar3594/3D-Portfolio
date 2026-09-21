import React from "react";

export default function Footer(){
    return (
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
      </footer>)
}