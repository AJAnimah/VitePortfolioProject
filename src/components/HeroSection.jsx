import React from 'react';

const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='hero__wrapper'>
        <picture >
          <source media="(min-width: 62.5em )" 
          srcSet="/assets/images/image-profile-desktop.webp" 
          />
          <source media="(min-width: 37.5em )" 
          srcSet="/assets/images/image-profile-tablet.webp" 
          />
          <img className='hero__image'
          src="/assets/images/image-profile-mobile.webp"
          alt="picture of Adam Keyes"
          width={174}
          height={383}
          />
        </picture>
        <img className='hero__rings'
          src="/assets/images/pattern-rings.svg" 
          alt="" 
          width={530} 
          height={129} 
        />
        <img className='hero__circle'
          src="/assets/images/pattern-circle.svg" 
          alt="" 
          width={129} 
          height={129}
        />
        <div className='hero__text'>
        <h1 className='hero__headline'>
          Great to <br/> meet you! I'm <span>Lindamell Abadoo.</span></h1>
        <p className='hero__description'>Based in GH, I'm a Front-end developer passionate about 
          building accessible and responsive web apps that users love.
        </p>
        <a href="" className="hero__contact underline">Contact me</a>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
