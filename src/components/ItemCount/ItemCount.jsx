import { useState } from "react"
import "./itemcount.css"

const ItemCount = ( {stock, addProduct} ) => {
  const [count, setCount] = useState(1)

  const handleClickSubstract = () => {
    if( count >1 ) {
     setCount ( count -1 )
     }
    }
     const handleClickAdd = () => {
      if( count < stock ){
        setCount( count + 1 )
    
      }
    }
  
  return (
    <div className="item-count">
      <div className="controls-count">
        <button onClick={handleClickSubstract}>-</button>
        <p> {count} </p>
        <button onClick={handleClickAdd}>+</button>
      </div>
      <button className="button-add" onClick={() => addProduct(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
