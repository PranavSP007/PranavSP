import React from "react";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  //to pull the values from the basket
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AUGART21/Event_Page_Header_EN_PC.jpg"
          alt=""
        />
        <div>
          <h3>welcome,{user?.email}</h3>
          <h2 className="checkout__title">your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              //this means that when we add the item to the basket,it maps through
              //it and shows it on the checkout page
            />
          ))}

          {/* basketitem */}
          {/* basketitem */}
          {/* basketitem */}
          {/* basketitem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        {/* <h2>the subtotal will go here</h2> */}
      </div>
    </div>
  );
}

export default Checkout;
