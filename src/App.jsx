import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/Header/header.jsx'
import {HeroOneImage} from './components/HeroOne/HeroImage/heroOneImg.jsx'
import {HeroOneText} from './components/HeroOne/HeroText/HeroOneText.jsx'
import {HowItWorks} from './components/HowItWorks/howItWorks.jsx'



function HeroOne() {
  return(
  <>
  <section className="hero-1">
                  <HeroOneImage />
                  <HeroOneText/>
                
            </section>
            </>
  )
}


                

function Footer() {
  return (
  <>
  <footer className="footer">
    <p>Find us on</p>
    <p>Facebook </p>
    <p>Instagram </p>
    <p>TikTok </p>
    <p> (C) Fireplace Palace 2024</p>
    <p>info@firepalace.co.uk</p>

  </footer>
  </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <body>
        <Header/>
        <div className="wrapper">
          <main>
              <HeroOne />
              <HowItWorks />
              
          </main>
        </div>
        <Footer />
</body>
    </>
  )
}

export default App
