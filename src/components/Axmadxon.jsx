import React, { useState } from 'react'
import "./Axmadxon.css"
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"
const Axmadxon = () => {
    let [count,setcount] = useState(0)
   const [selected, setSelected] = useState("brown");
   const [active, setActive] = useState(null);

    function handleClick(){
        setcount(count +1)
        
    }
    function minus(){
        if(count > 0)
        setcount(count-1)
    }
   
   
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
          <div className="title">
            <div className="text">
                <h1>One Life Graphic T-shirt</h1>
            </div>
            <div className="ball">
                <p>★★★★⯨ <mark>4.5/</mark> <span>5</span></p>
            </div>
            <div className="price">
                <h1>$260</h1>
                <h1><del>$300</del></h1>
                <mark>-40%</mark>
            </div>
            <div className="description">
                <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
            </div>
<hr />
            <div className="color">
                <div className="selcet">
                    <p>Select Colors</p>
                  <div className="inputlar">
                       <div className="in1">
                      <button onClick={() => setSelected("brown")}>
         {selected === "brown" && "✔"}
      </button>
                    </div>

                       <div className="in2">
        <button onClick={() => setSelected("green")}>
         {selected === "green" && "✔"}
      </button>

                    </div>
                       <div className="in3">

      <button onClick={() => setSelected("blue")}>
         {selected === "blue" && "✔"}
      </button>
                    </div>

  
                  </div>

                </div>
            </div>
            <hr />
                    <div className="btn">
                   <div className="selcet">
                    <p>Choose Size</p></div>     
            <button
        onClick={() => setActive(1)}
        style={{ backgroundColor: active === 1 ? "black" : "gray", color: "white" }}
      >
        Small
      </button>

      <button
        onClick={() => setActive(2)}
        style={{ backgroundColor: active === 2 ? "black" : "gray", color: "white" }}
      >
        Medium
      </button>

      <button
        onClick={() => setActive(3)}
        style={{ backgroundColor: active === 3 ? "black" : "gray", color: "white" }}
      >
        Large
      </button>

      <button
        onClick={() => setActive(4)}
        style={{ backgroundColor: active === 4 ? "black" : "gray", color: "white" }}
      >
        X-Large
      </button>
       

  
  
          </div><hr />
                 <div className="card">
        
        <div className="btns">
            <button onClick={handleClick}>+</button>
            <p>{count}</p>
            <button onClick={minus}>-</button>
            
        </div>
        <button>Add to Cart</button>
    </div>
          </div>
       
   
    

       </div>
    </div>
  )
}

export default Axmadxon