import React from 'react'
import "./Axmadxon.css"
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"
const Axmadxon = () => {
  return (
    <div>
       
       <div className="containeri">
          <div className="ahref">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Men</a></li>
                <li>T-shirts</li>
            </ul>
          </div>
          <div className="fudbolka">
       <div className="fudbolka1">
             <img src={f1} alt="" />
            <img src={f2} alt="" />
            <img src={f3} alt="" />
       </div>
       <div className="fudbolka2">
        <img src={f4} alt="" />
       </div>
          </div>
       </div>
    </div>
  )
}

export default Axmadxon