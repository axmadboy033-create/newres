import React from 'react'
import './Main2.css'

const Testimonial = ({name, text})=> (
  <div className="testimonial">
    <div className="stars">★★★★★</div>
    <h4>{name}</h4>
    <p>{text}</p>
  </div>
)

const Main2 = ()=>{
  const items=[
    {name:'Sarah M.', text:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
    {name:'Alex K.', text:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"},
    {name:'James L.', text:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"},
  ]
  return (
    <section className="testimonials container">
      <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>
      <div className="test-grid">
        {items.map((it,i)=>(<Testimonial key={i} {...it}/>))}
      </div>
    </section>
  )
}

export default Main2
