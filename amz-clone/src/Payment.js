import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment" style={{ backgroundColor: "white" }}>
      <div className="payment__container">
        {/* payment-section - delivery address */}
        <h1>
          Checkout ({" "}
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            {" "}
            {basket?.length} items
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>New Extention</p>
            <p>Kolar-563101</p>
          </div>
        </div>
        {/* payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {/* displaying basket products here */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            {/* stripe payment magic will go */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
