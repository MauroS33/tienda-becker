/* import React from 'react' */
import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {   
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

    if(cart.length === 0) {
      return(
        <div>
          <h2>No hay productos en el carrito</h2>
          <Link to="/">Ve a comprar algo lindo</Link>
        </div>
      )
    }
  return (
    <div>
      {
        cart.map((productCart)=> (
            <div key={productCart.id}>
                <img src={productCart.image} alt="articulo agregado" />  /* hay un error a corregir aqui ya que no se ven imagenes en el carrito */
                <p> {productCart.name} </p>
                <p>Precio c/u: {productCart.price} </p>
                <p>Cantidad: {productCart.quantity} </p>
                <p>Subtotal: {productCart.quantity * productCart.price} </p>
                <button onClick={ () => deleteProductById(productCart.id)}>Eliminar producto</button>
            </div>
        ))
      }
      <p>Precio total: {totalPrice()} </p>
      <button onClick={deleteCart}>Vaciar carrito</button>
    </div>
  )
}
 
export default Cart
