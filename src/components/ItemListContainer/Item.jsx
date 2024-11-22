import { Link } from 'react-router-dom'
import "./itemlistcontainer.css"

const Item = ({product}) => {
  return (
    <div className='item'>
      <Link to={"/detail/"+ product.id }>
        <img src={product.image[0]} className="img-item" alt="item" />
        <p className="text-item"> {product.name} </p>
        <p className="text-item">$ {product.price} </p>
      </Link>
  </div>    
  )
}

export default Item
