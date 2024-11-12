import { useState, useEffect } from "react"
import db from "../../db/db.js"
import { getDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import "./itemdetail.css"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
 /*    const [loading, setLoading] = useState(true) */

  const { idProduct } = useParams()

  const getProductsById = () => {
    const docRef = doc( db, "products", idProduct )
    getDoc(docRef)
    .then((dataDb)=> {
      const data = { id: dataDb, ...dataDb.data() }
      setProduct(data)
    } )
  }
  useEffect( ()=> {
    getProductsById()
  }, [] )

  return (
    <>
    {
    /* loading === true ? ( <div>Cargando...</div> ) : */ <ItemDetail product={product} />
    }
    </>
  )
}
export default ItemDetailContainer