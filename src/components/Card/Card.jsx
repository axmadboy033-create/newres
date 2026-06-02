import { useState } from "react";
import "./Card.css";

function Card() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "https://png.pngtree.com/png-clipart/20250423/original/pngtree-abstract-gradient-t-shirt-blending-modern-colors-seamlessly-png-image_19854961.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "https://resources.mandmdirect.com/Images/_default/b/v/3/bv31295_1_cloudzoom.jpg",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "https://www.mytheresa.com/image/1094/1238/100/1d/P01085839.jpg",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.2;
  const delivery = cartItems.length ? 15 : 0;
  const total = subtotal - discount + delivery;

  return (
    <section className="cart">
      <div className="container">
        <h1 className="cart-title">YOUR CART</h1>

        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <span>${item.price}</span>
                </div>

                <div className="item-actions">
                  <button
                    className="delete-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑
                  </button>

                  <div className="qty">
                    <button onClick={() => decreaseQty(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${subtotal}</strong>
            </div>

            <div className="summary-row">
              <span>Discount (-20%)</span>
              <strong className="discount">
                -${discount.toFixed(0)}
              </strong>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <strong>${delivery}</strong>
            </div>

            <hr />

            <div className="summary-row total">
              <span>Total</span>
              <strong>${total.toFixed(0)}</strong>
            </div>

            <button className="checkout-btn">
              Go To Checkout →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;