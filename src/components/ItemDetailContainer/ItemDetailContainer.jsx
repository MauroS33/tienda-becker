import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import "./itemdetail.css"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

  const { idProduct } = useParams()

  useEffect( ()=> {
    setLoading(true)

    getProducts()
      .then((data)=> {
        const findProduct = data.find((productData)=> productData.id === idProduct )
        setProduct(findProduct)
      } )
      .finally(() => setLoading(false))
  }, [] )

  return (
    <>
    {
    loading === true ? ( <div>Cargando...</div> ) : <ItemDetail product={product} />
    }
    </>
  )
}
export default ItemDetailContainer