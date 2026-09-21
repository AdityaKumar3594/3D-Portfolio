import { useState, useEffect } from 'react'
import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Footer from './components/footer'
import DogLoader from './components/DogLoader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minDelay = new Promise(resolve => setTimeout(resolve, 2500))

    const pageLoad = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve()
      } else {
        window.addEventListener('load', resolve, { once: true })
      }
    })

    // Wait for both: at least 2s AND the page to finish loading
    Promise.all([minDelay, pageLoad]).then(() => setLoading(false))
  }, [])

  if (loading) return <DogLoader />

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
      <Section2 />
      <Section3 />
      <Footer />
      </main>
    
    </>
  )
}

export default App
