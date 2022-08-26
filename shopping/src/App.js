import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import CardContextProvider from './Context/Context'
const App = () => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    // cart.push(item);
    setCart([...cart, item])
    console.log(item);
    console.log(cart);
    // e.target.classList.add('hidden');
  }
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <CardContextProvider> 
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (<Products handleClick={handleClick} />) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      </CardContextProvider> 
    </>
  )
}

export default App