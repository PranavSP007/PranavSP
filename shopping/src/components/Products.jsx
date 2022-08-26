import React, { useContext, useEffect, useState } from "react";
import productList from "../data";
import Cards from "./Cards";
import "../styles/products.css";
import { CardDataContext } from "../Context/Context";
import AddDetails from "./AddDetails";

const Products = ({ handleClick }) => {
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState(true)
  const {
    data,
    setData,
    closePopup,
    setClosePopup,
  } = useContext(CardDataContext);
  console.log("closePopup", closePopup);
  useEffect(() => {
    setData(productList);
  }, []);
  console.log("data", data)
  function sortdata() {
    let newDataForPrice = [...data]
    if (order) {
      newDataForPrice.sort((a, b) => a.price - b.price);
      setOrder(!order)
    } else {
      newDataForPrice.sort((a, b) => b.price - a.price);
      setOrder(!order)
    }
    setData(newDataForPrice);
  }
  function sortdataRating() {
    let newDataForRating = [...data];

    newDataForRating.sort((a, b) => b.rating - a.rating);
    setData(newDataForRating);
  }
  return (
    <>
      <div className="cardDiv">
        <div style={{ flex: 7 }}>
          <input
            className="inputClass"
            placeholder="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="center">
          <button className="new" onClick={() => setClosePopup(true)}><i class="fa-solid fa-plus"></i>ADD</button>
        </div>
        <div className="filter" >
          <button className="price" onClick={sortdata}>Price {order ? <i class="fa-solid fa-sort-up"></i> : <i class="fa-solid fa-sort-down"></i>}</button>&nbsp;
          <button className="rating" onClick={sortdataRating}>by rating</button>
        </div>
      </div>

      <AddDetails />
      <section /* style={{whiteSpace:'nowrap',display:'inline'}} */>
        {data
          ?.filter((post) => {
            if (query === "") {
              return post;
            } else if (
              post.category.toLowerCase().includes(query.toLowerCase())
            ) {
              return post;
            } else if (
              post.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return post;
            }
          }).map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
      </section>
    </>
  );
};

export default Products;
