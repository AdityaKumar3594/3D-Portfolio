import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Footer from './components/Footer'
import DogLoader from './components/DogLoader'
import ScrollToTop from './components/ScrollToTop'

import DehazingProject from './Pages/Projects/DehazingProject'
import MultiAgentProject from './Pages/Projects/MultiAgentProject'
import PlagiarismProject from './Pages/Projects/PlagiarismProject'
import ResumeAIProject from './Pages/Projects/ResumeAIProject'
import MovieRecommenderProject from './Pages/Projects/MovieRecommenderProject'
import KennedyClubProject from './Pages/Projects/KennedyClubProject'
import RoyalOperaProject from './Pages/Projects/RoyalOperaProject'

function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minDelay = new Promise(resolve => setTimeout(resolve, 1000))

    const pageLoad = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve()
      } else {
        window.addEventListener('load', resolve, { once: true })
      }
    })

    Promise.all([minDelay, pageLoad]).then(() => setLoading(false))
  }, [])

  if (loading) return <DogLoader />

  return (
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
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/dehazing" element={<DehazingProject />} />
        <Route path="/projects/multi-agent" element={<MultiAgentProject />} />
        <Route path="/projects/plagiarism" element={<PlagiarismProject />} />
        <Route path="/projects/resume-ai" element={<ResumeAIProject />} />
        <Route path="/projects/movie-recommender" element={<MovieRecommenderProject />} />
        <Route path="/projects/kennedy-club" element={<KennedyClubProject />} />
        <Route path="/projects/royal-opera" element={<RoyalOperaProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
