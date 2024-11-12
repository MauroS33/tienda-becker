import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProductInCart } = useContext(cartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count}
    addProductInCart(productCart)
    setShowItemCount(false)
  }

  const [currentImage, setCurrentImage] = useState(product.image[0]) /* no me lee el array */

  const images = product.image.filter((image)=> image !== currentImage)

  const handleClickImage = (image) => {
    setCurrentImage(image)
  }



  return (
    <div className="item-detail">
      <div className="images-detail-container">

        <div className="secondary-images">
          {
            images.map((image)=> (
              <img src= {image} key={image} onClick={ () => handleClickImage(image)} />
            ))
          }
        </div>
        <div className="main-image">
        <img src={currentImage} alt="imagen de la variable de estado currentImage" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {
          showItemCount === true ?
          ( <ItemCount stock= {product.stock} addProduct={addProduct} /> )
          :
          ( <Link to="/cart">Terminar compra</Link>)
        }

      </div>
    </div>
  )
}
export default ItemDetail