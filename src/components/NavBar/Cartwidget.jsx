import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import krt from "../../assets/cart.png"
import React from 'react'
import { Link } from "react-router-dom"

const Cartwidget = () => {
  const { totalQuantity } = useContext(cartContext)

  const total = totalQuantity()

  return (
    <Link to= "/cart" className="cartWidget">
      <img src= {krt} alt="carrito" />
      <p className="number-cartwidget"> { total >= 1 && total } </p>
    </Link>
  )
}

export default Cartwidget
