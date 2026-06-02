import React from 'react'
import './Main3.css'

const Main3 = ()=>{
  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-left">
          <h3>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h3>
        </div>
        <div className="newsletter-right">
          <input placeholder="Enter your email address" />
          <br />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
    </section>
  )
}

export default Main3
