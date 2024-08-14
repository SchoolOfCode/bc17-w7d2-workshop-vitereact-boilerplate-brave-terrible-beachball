import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/Header/header.jsx'
import {HeroOneImage} from './components/HeroOne/HeroImage/heroOneImg.jsx'
import {HeroOneText} from './components/HeroOne/HeroText/HeroOneText.jsx'
import {HowItWorks} from './components/HowItWorks/howItWorks.jsx'
import {Footer} from './components/Footer/footer.jsx'


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


                



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Header/>
        <div className="wrapper">
          <main>
              <HeroOne />
              <HowItWorks />
              
          </main>
        </div>
        <Footer />
</div>
    </>
  )
}

export default App
