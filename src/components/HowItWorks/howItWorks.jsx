import React, { useState } from 'react';


export function HowItWorks(){
  const [articleList] = useState([
    {image: "src/assets/how-it-works-1.png", heading: "Give us a call...", bodyText: "Call us and book in a \'Design Consultation\' on a date and time to suit.", id: 1},
    {image: "src/assets/how-it-works-2.png", heading: "We come to you...", bodyText: "We come to your home to do an assessment of the space and to your style preference.", id: 2},
    {image: "src/assets/how-it-works-3.png", heading: "We recommend...", bodyText: "We send you a bespoke set of fireplace recommendation.", id: 3}
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