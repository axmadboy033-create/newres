import React, { useState } from "react";
import "./Axmadxon.css";

import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";

const Product = () => {
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("Small");

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    alert(
      `Mahsulot savatga qo'shildi!\n\nRang: ${selectedColor}\nSize: ${selectedSize}\nSoni: ${count}`
    );
  };

  return (
    <div>
      <div className="containeri">
        <div className="ahref">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
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
            <p>
              ★★★★⯨ <mark>4.5/</mark> <span>5</span>
            </p>
          </div>

          <div className="price">
            <h1>$260</h1>
            <h1>
              <del>$300</del>
            </h1>
            <mark>-40%</mark>
          </div>

          <div className="description">
            <p>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>

          <hr />

          <div className="color">
            <p>Select Colors</p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <button
                onClick={() => setSelectedColor("brown")}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border:
                    selectedColor === "brown"
                      ? "3px solid black"
                      : "none",
                  background: "brown",
                  cursor: "pointer",
                }}
              >
                {selectedColor === "brown" && "✔"}
              </button>

              <button
                onClick={() => setSelectedColor("green")}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border:
                    selectedColor === "green"
                      ? "3px solid black"
                      : "none",
                  background: "green",
                  cursor: "pointer",
                }}
              >
                {selectedColor === "green" && "✔"}
              </button>

              <button
                onClick={() => setSelectedColor("blue")}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border:
                    selectedColor === "blue"
                      ? "3px solid black"
                      : "none",
                  background: "blue",
                  cursor: "pointer",
                }}
              >
                {selectedColor === "blue" && "✔"}
              </button>
            </div>
          </div>

          <hr />

          <div className="btn">
            <p>Choose Size</p>

            <button
              onClick={() => setSelectedSize("Small")}
              style={{
                backgroundColor:
                  selectedSize === "Small" ? "black" : "#ddd",
                color: selectedSize === "Small" ? "white" : "black",
              }}
            >
              Small
            </button>

            <button
              onClick={() => setSelectedSize("Medium")}
              style={{
                backgroundColor:
                  selectedSize === "Medium" ? "black" : "#ddd",
                color: selectedSize === "Medium" ? "white" : "black",
              }}
            >
              Medium
            </button>

            <button
              onClick={() => setSelectedSize("Large")}
              style={{
                backgroundColor:
                  selectedSize === "Large" ? "black" : "#ddd",
                color: selectedSize === "Large" ? "white" : "black",
              }}
            >
              Large
            </button>

            <button
              onClick={() => setSelectedSize("X-Large")}
              style={{
                backgroundColor:
                  selectedSize === "X-Large" ? "black" : "#ddd",
                color: selectedSize === "X-Large" ? "white" : "black",
              }}
            >
              X-Large
            </button>
          </div>

          <hr />

          <div className="card">
            <div className="btns">
              <button onClick={handleMinus}>-</button>
              <p>{count}</p>
              <button onClick={handlePlus}>+</button>
            </div>

            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;