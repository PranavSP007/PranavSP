import React, { useContext } from 'react'
import { CardDataContext } from '../Context/Context';
import EditDetails from './EditDetails';

const Cards = ({ item, handleClick }) => {
    const {
        data,
        setData,
        closePopup,
        setClosePopup,
    } = useContext(CardDataContext);
    const { id, name, image, description, brand, category, price, rating } = item;

    return (
        <>
            <div className="cards">
                <div className="image_box">
                    <img src={image} alt="" />
                </div>
                <div className="details">
                    <p>{brand}</p>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>Price - {price}Rs</p>
                    <p>Rating:{rating}</p>
                    <div className='btn'>
                        {data.some((ele) => ele.id === item.id) ? (
                            <div className='add'><button onClick={() => handleClick(item)}>Add to Cart</button> </div>
                        )
                            : (
                                <div  className='add'><button hidden="hidden">Add to Cart</button> </div>
                            )}
                        <div className='actions'>
                            {/* <button style={{ background: "#0bf091", fontWeight: "bold" }} onClick={() => setClosePopup(true)} >
                                <i className='fa fa-pen' />
                            </button> &nbsp; */}
                            <button onClick={() => setData(data.filter((ele) => ele.id != item.id))} style={{ background: "#f00b0b", fontWeight: "bold" }} >
                                <i className='fa fa-trash' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards