import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { CardDataContext } from "../Context/Context";
import "../styles/style.css";

const AddDetails = () => {
  const { data, closePopup, setClosePopup } = useContext(CardDataContext);
  let ProductData = {
    "id": data[data?.length - 1]?.id + 1,
  }

  const addDetails = (e) => {
    if (e.target.name == "name") {
      ProductData.name = e.target.value;
    } else if (e.target.name == "image") {
      ProductData.image = e.target.value
    }else if (e.target.name == "description") {
      ProductData.description = e.target.value
    } else if (e.target.name == "brand") {
      ProductData.brand = e.target.value
    } else if (e.target.name == "category") {
      ProductData.category = e.target.value
    } else if (e.target.name == "price") {
      ProductData.price = e.target.value
    } else if (e.target.name == "rating") {
      ProductData.rating = e.target.value
    }else if (e.target.name == "amount") {
      ProductData.amount = e.target.value
    }
  }
  //addProduct function is used for adding new movie to our parent list.
  const addProduct = (e) => {
    e.preventDefault();
    if (ProductData.name != null && ProductData.price != null) {
      data.push(ProductData)
      setClosePopup(false);
    }
  }

  return (
    <div >
      <ReactModal isOpen={closePopup}>
        <div style={{color:"red",fontWeight:"bolder"}} className="closeBtn" onClick={() => setClosePopup(false)}>
          X
        </div>
        <div>
          <h1>Add Product Details</h1>
        </div>
        <form onSubmit={addProduct}>
          <div >
            <input required className="inputClass" name="name" type="text" placeholder="product name" onChange={addDetails}></input>
            <input required className='inputClass' name="image" type="text" placeholder='Photo Url'  onChange={addDetails}   />
            <input required className="inputClass" name="description" type="text" placeholder="product description" onChange={addDetails}></input>
            <input required className="inputClass" name="brand" type="text" placeholder="product brand" onChange={addDetails}></input>
            <select className="inputClass" onChange={addDetails} name="category">
              <option val="">Please choose</option>
              <option val="1">Electronics</option>
              <option val="2">Stationary</option>
              <option val="3">Grocery</option>
              <option val="4">Daily Essential</option>
            </select>
            <input required className="inputClass" name="price" type="number" placeholder="product price" onChange={addDetails}></input>
            <input required className="inputClass" name="rating" type="number" placeholder="product rating" onChange={addDetails}></input>
            <input required className="inputClass" name="amount" type="number" placeholder="product amount(qty)" onChange={addDetails}></input>
          </div>
          <button type="submit" className="inputClassBtn" >Add Product</button>
        </form>
      </ReactModal>
    </div>
  );
};

export default AddDetails;
