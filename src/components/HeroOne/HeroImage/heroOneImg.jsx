import React, { useState } from 'react';

export function HeroOneImage() {
    const [image] = useState({src:"src/assets/hero-desktop.png", alt:"fireplace"})
    return (
      <>
      <img src={image.src} alt={image.alt}></img>
      </> )
    
  }