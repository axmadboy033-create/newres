import React from 'react'
import './Main.css'

const ProductCard = ({title, price, image})=> (
  <div className="product-card">
    <img src={image} alt="product"/>
    <div className="product-info">
      <div className="product-title">{title}</div>
      <div className="product-price">${price}</div>
    </div>
  </div>
)

const Main = () => {
  const items = [
    {title:'T-shirt with Tape Details', price:120, image:'https://www.tshepo.shop/cdn/shop/files/TSHEPO_Monarch_Black_T-Shirt.jpg?v=1748959046'},
    {title:'Skinny Fit Jeans', price:240, image:'https://static.zara.net/assets/public/93b4/768e/12304a81b609/ac395c24e5c3/04110704427-e1/04110704427-e1.jpg?ts=1750838337093&w=792&f=auto'},
    {title:'Checkered Shirt', price:180, image:'https://lambrettaclothing.co.uk/cdn/shop/files/RWIS1464-KHAKI-1.jpg?v=1760539972'},
    {title:'Sleeve Striped T-shirt', price:130, image:'https://tangerine-studios.com/cdn/shop/files/FlatsamedidaFW25ParteII-12.png?v=1753914554&width=1946'},
  ]
  return (
    <main className="main-section container">
      <h2 className="section-title">NEW ARRIVALS</h2>
      <div className="grid">
        {items.map((it, i)=> <ProductCard key={i} {...it} />)}
      </div>
      <div className="view-all"><button>View All</button></div>

      <h2 className="section-title">TOP SELLING</h2>
      <div className="grid">
        {items.map((it, i)=> <ProductCard key={i+10} {...it} />)}
      </div>
      <div className="view-all"><button>View All</button></div>
    </main>
  )
}

export default Main
