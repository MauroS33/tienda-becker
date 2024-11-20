import { useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const Cart = () => {   
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

    if(cart.length === 0) {
      return(
        <div className="empty-cart">
          <h2 className="title-empty-cart">No hay productos en el carrito...</h2>
          <Link to="/" className="home-empty-cart">¡Ve a comprar algo lindo!</Link>
        </div>
      )
    }
  return (
    <div className="cart">
      <h1 className="title-cart">Articulos en el carrito:</h1>
      {
        cart.map((productCart)=> (
            <div className="item-cart" key={productCart.id}>
                <img src={productCart.image[0]} alt="articulo agregado" />  
                <p className="text-cart"> {productCart.name} </p>
                <p className="text-cart">Precio c/u: ${productCart.price} </p>
                <p className="text-cart">Cantidad: {productCart.quantity} unidad/es</p>
                <p className="text-cart">Subtotal: ${productCart.quantity * productCart.price} </p>
                <button className="delete-item" onClick={ () => deleteProductById(productCart.id)}> <BsFillTrash3Fill/> </button>
            </div>
        ))
      }
      <div className="info-cart">
      <p className="text-info-cart">Precio total: ${totalPrice()} </p>
      <button className="buy-cart"><Link  to="/checkout">Realizar pedido</Link></button>
      <button className="delete-cart" onClick={deleteCart}>Vaciar carrito</button>

      </div>
    </div>
  )
}
 
export default Cart
