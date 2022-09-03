import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove itemsfrom the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating) //makes array of the size 5 if rating =5
            .fill() //fills with empty value like null then map to every single value to put the star
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
