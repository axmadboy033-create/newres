import React from 'react'
import './Main1.css'

const Card = ({title, image})=> (
  <div className="style-card"><img src={image} alt="s"/><div className="style-title">{title}</div></div>
)

const Main1 = ()=>{
  const data=[
    {title:'Casual', image:'https://images.hugoboss.com/is/image/hugobosscsprod/250428_Festival-Outfit_750x850_mobile_2?%24large%24&align=0,-1&fit=crop,1&ts=1753346186968&qlt=60&wid=768&hei=870'},
    {title:'Formal', image:'https://assets.paulsmith.com/paul-smith-storyblok/f_jpg,q_auto,w_1536/v1710945003/Discover/Stories/The%20New%20Formal/4x53'},
    {title:'Party', image:'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/NOVEMBER/13/Z8dnqOWj_907625be5c8e45698e7fa0e1690d30b6.jpg'},
    {title:'Gym', image:'https://www.marcypro.com/cdn/shop/files/HOME_GYM_-_CATEGORY-min.jpg?v=1741777597&width=1500'},
  ]
  return (
    <section className="browse container">
      <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
      <div className="browse-grid">
        {data.map((d,i)=> <Card key={i} {...d} />)}
      </div>
    </section>
  )
}

export default Main1
