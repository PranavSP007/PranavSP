import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // destructuring the props value passed to this component from home.js
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>>>>", basket);

  const addToBasket = () => {
    //dispatch the action
    //ie.,adding item to the data layer(stateprovider)
    //this works like a gun ie., shoot an action into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        //the values(id,title so on..) are the prop received
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating) //makes array of the size 5 if rating =5
            .fill() //fills with empty value like null then map to every single value to put the star
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className="btn" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
