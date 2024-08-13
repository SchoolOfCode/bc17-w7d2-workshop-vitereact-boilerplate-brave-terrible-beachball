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

function HeroOne() {
  return(
  <>
  <section className="hero-1">
                <img src="src/assets/hero-desktop.png" alt="fireplace"></img>
                <div className="call-to-action">
                    <h2>Discover the Perfect Fireplace...</h2>
                    <p>Book consultation: <span className="contact-number">0121 345 6789</span></p>
                </div>
                
            </section>
            </>
  )
}

function HowItWorks() {
  const [articleList] = useState([
    {image: "src/assets/how-it-works-1.png", heading: "Give us a call...", bodyText: "Call us and book in a \'Design Consultation\' on a date and time to suit.", id: 1},
    {image: "src/assets/how-it-works-1.png", heading: "We come to you...", bodyText: "We come to your home to do an assessment of the space and to your style preference.", id: 2},
    {image: "src/assets/how-it-works-1.png", heading: "We recommend...", bodyText: "We send you a bespoke set of fireplace recommendation.", id: 3}
  ]);
  return ( 
    <>
<section className="how-it-works">
  { <h2>How it works.</h2> }
  {articleList.map((article) => (
    <div className="article-preview" key={article.id}>
      <img src={article.image}></img>
      <h2>{ article.heading }</h2>
      <p>{ article.bodyText }</p>
    </div>

  ))}
  </section>
  </>
  );
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
