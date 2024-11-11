import { useState } from "react"

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
    <div>
      <button onClick={handleClickSubstract}>-</button>
      <p> {count} </p>
      <button onClick={handleClickAdd}>+</button>
      <button onClick={() => addProduct(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
