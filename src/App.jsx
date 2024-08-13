import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <>
    <header>
            <h1>🔥 Fireplace Palace</h1>
        </header>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <body>
        {Header()}
        <div className="wrapper">
        <main>
            <section className="hero-1">
                <img src="src/assets/hero-desktop.png" alt="fireplace"></img>
                <div className="call-to-action">
                    <h2>Discover the Perfect Fireplace...</h2>
                    <p>Book consultation: <span className="contact-number">0121 345 6789</span></p>
                </div>
                
            </section>
            <section className="how-it-works">
                <h2>How it works.</h2>
                
                <img src="src/assets/how-it-works-1.png" alt="article-1"></img>
                <h5>Give us a call...</h5>
                <p>Call us and book in a "Design Consultation" on a date and time to suit.</p>

                <img src="src/assets/how-it-works-2.png" alt="article-2"></img>
                <h5>We come to you...</h5>
                <p>We come to your home to do an assessment of the space and to your style preference.</p>

                <img src="src/assets/how-it-works-3.png" alt="article-3"></img>
                <h5>We recommend...</h5>
                <p>We send you a bespoke set of fireplace recommendation.</p>

            </section>
        </main>
    </div>
        <footer className="footer">
            <p>Find us on</p>
                <p>Facebook </p>
                <p>Instagram </p>
                <p>TikTok </p>
             
              <p> (C) Fireplace Palace 2024</p>
              <p>info@firepalace.co.uk</p>

        </footer>
    
</body>
    </>
  )
}

export default App
