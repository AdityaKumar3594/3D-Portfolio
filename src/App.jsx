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
            <small>2020 - ONGOING</small>
            <h1>Tomorrowland</h1>
          </div>
          <div img-title="navy-pier" className="title">
            <small>2020 - ONGOING</small>
            <h1> Navy Pier</h1>
          </div>
          <div img-title="msi-chicago" className="title">
            <small>2020 - ONGOING</small>
            <h1>  MSI Chicago</h1>
          </div>
          <div img-title="phone" className="title">
            <small>2020 - ONGOING</small>
            <h1>This Was Louise’s Phone</h1>
          </div>
          <div img-title="kikk" className="title">
            <small>2020 - ONGOING</small>
            <h1>KIKK Festival 2018</h1>
          </div>
          <div img-title="kennedy" className="title">
            <small>2020 - ONGOING</small>
            <h1>The Kennedy Center</h1>
          </div>
          <div img-title="opera" className="title">
            <small>2020 - ONGOING</small>
            <h1>Royal Opera Of Wallonia</h1>
          </div>
        </div>
      </section>
      <section id="section-3"></section>
      </main>
    </>
  )
}

export default App
