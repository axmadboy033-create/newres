import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>FIND CLOTHES
            <span> THAT MATCHES
            YOUR STYLE</span>
          </h1>
          <p className="hero-desc">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="cta">Shop Now</button>
          <ul className="stats">
            <li><strong>200+</strong><span>International Brands</span></li>
            <li><strong>2,000+</strong><span>High-Quality Products</span></li>
            <li><strong>30,000+</strong><span>Happy Customers</span></li>
          </ul>
        </div>

        <div className="hero-right">
          <img src="https://static.vecteezy.com/system/resources/previews/068/349/251/non_2x/boy-and-girl-talking-silhouette-romantic-teen-couple-or-friendship-free-vector.jpg" alt="models" />
        </div>
      </div>

      <div className="brand-strip">
        <div className="container brands">
          <div>VERSACE</div>
          <div>ZARA</div>
          <div>GUCCI</div>
          <div>PRADA</div>
          <div>Calvin Klein</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
