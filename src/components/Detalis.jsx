import React from 'react'
import "./Detalis.css"
import { BiSolidVector } from "react-icons/bi";
import f5 from '../assets/f5.png'
import f6 from '../assets/f6.png'
import f7 from '../assets/f7.png'
import f8 from '../assets/f8.png'
const Detalis = () => {
  return (
    <div>
        <div className="containeri2">
            <div className="header1">
                <h1>Product Details</h1>
                <h1>Rating & Reviews</h1>
                <h1>FAQs</h1>
             
            
            </div>
          
            <div className="all">
                <div className="review">
                    <h1>All Reviews</h1>
                    <p>(451)</p>
                </div>
               <div className="latest">
                 <button style={{width:"50px", height:'50px',borderRadius:'50px', border:'none' ,textAlign:'center',margin:'13px'}}><BiSolidVector /></button>
                <button style={{width:'110px',height:'50px',borderRadius:'50px', border:'none',margin:'13px'}}>Latest ∨</button>
                <button style={{width:'110px',height:'50px',borderRadius:'50px', border:'none',backgroundColor:'black',color:'#fff',margin:'13px'}}>Write a Review</button>
               </div>
            </div>
            <div className="cardlar">


                <div className="user">
                    
                <div className="balll">
                    <p>★★★★⯨</p>
                </div>
                
                    <h3>Samantha D.</h3>
                    <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>

                    <div className="watch">
                        <p>Posted on August 14, 2023</p>
                    </div>

                    
                </div>

                            <div className="user">
                    
                <div className="balll">
                    <p>★★★★</p>
                </div>
                
                    <h3>Alex M.</h3>
                    <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>

                    <div className="watch">
                        <p>Posted on August 15, 2023</p>
                    </div>

                    
                </div>


                            <div className="user">
                    
                <div className="balll">
                    <p>★★★⯨</p>
                </div>
                
                    <h3>Ethan R.</h3>
                    <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>

                    <div className="watch">
                        <p>Posted on August 16, 2023</p>
                    </div>

                    
                </div>



                            <div className="user">
                    
                <div className="balll">
                    <p>★★★★</p>
                </div>
                
                    <h3>Olivia P.</h3>
                    <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>

                    <div className="watch">
                        <p>Posted on August 17, 2023</p>
                    </div>

                    
                </div>



                            <div className="user">
                    
                <div className="balll">
                    <p>★★★★</p>
                </div>
                
                    <h3>Liam K.</h3>
                    <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>

                    <div className="watch">
                        <p>Posted on August 18, 2023</p>
                    </div>

                    
                </div>



                            <div className="user">
                    
                <div className="balll">
                    <p>★★★★⯨</p>
                </div>
                
                    <h3>Ava H.</h3>
                    <p>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>

                    <div className="watch">
                        <p>Posted on August 19, 2023</p>
                    </div>

                    
                </div>

                   
            </div>

            <div className="load">
                <button>Load More Reviews</button>
            </div>

        </div>

        <div className="containeri3">
            <div className="also">
                <h1>You might also like</h1>
            </div>
   <div className="products">
             <div className="product">
                <div className="polo">
                    <img src={f5} alt="" />

                </div>
                <div className="name1">
                    <h2>Polo with Contrast Trims</h2>
                    <p><mark>★★★★</mark> 4.0/<span>5</span></p>
                </div>
                <div className="price2">
                    <h2>$212</h2>
                    <p>$242</p>
                    <mark>-20%</mark>

                </div>

            </div>

            
            <div className="product">
                <div className="polo">
                    <img src={f6} alt="" />

                </div>
                <div className="name1">
                    <h2>Gradient Graphic T-shirt</h2>
                    <p><mark>★★★⯨</mark> 3.5/<span>5</span></p>
                </div>
                <div className="price2">
                    <h2>$145</h2>
                   

                </div>

            </div>



          
            <div className="product">
                <div className="polo">
                    <img src={f7} alt="" />

                </div>
                <div className="name1">
                    <h2>Polo with Tipping Details</h2>
                    <p><mark>★★★★⯨</mark> 4.5/<span>5</span></p>
                </div>
                <div className="price2">
                    <h2>$180</h2>
                    

                </div>

            </div>
       
            <div className="product">
                <div className="polo">
                    <img src={f8} alt="" />

                </div>
                <div className="name1">
                    <h2>Black Striped T-shirt</h2>
                    <p><mark>★★★★★</mark> 5.5/<span>5</span></p>
                </div>
                <div className="price2">
                    <h2>$120</h2>
                    <p>$150</p>
                    <mark>-30%</mark>

                </div>

            </div>
   </div>
        </div>
    </div>
  )
}

export default Detalis