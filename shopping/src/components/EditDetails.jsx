import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { CardDataContext } from "../Context/Context";


const EditDetails = ({item}) => {
    const {data,closePopup,setClosePopup}=useContext(CardDataContext);
    const id=item.id;
    const [name,setName]=useState(item.name)
    const [price,setPrice]=useState(item.price)
    const[rating,setRating]=useState(item.rating)
  return (
    <div>EditDetails</div>
  )
}

export default EditDetails