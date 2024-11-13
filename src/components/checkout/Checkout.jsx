import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [idOrder, setIdOrder] = useState(null)

    const { cart, totalPrice, deleteCart } = useContext(cartContext)

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name] : event.target.value } )

    }


    const handleSubmitForm = ( event ) => {
        event.preventDefault()

        const order = {
            buyer: { ...dataForm },
            producs: [ ...cart ],
            date: Timestamp.fromDate( new Date() ),
            total: totalPrice()

        }
        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection( db, "orders")
        addDoc(ordersRef, newOrder)
            .then( (response) => {
                setIdOrder(response.id)
            })
            .finally(()=>{
                deleteCart()
            } )
    }

  return (
    <div>
        {
            idOrder === null ? (
                <form onSubmit={handleSubmitForm}>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Nombre"/>
        
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="Telefono"/>
                
                <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="eMail"/>
        
                <button type="submit">Completar compra</button>
              </form>
            ):(
                <div>
                    <h2>Orden generada de manera correcta</h2>
                    <p>Favor de guardar su numero de orden: {idOrder} </p>
                    <Link to="/">Volver a la tienda</Link>
                </div>
            )
        }

    </div>
  )
}

export default Checkout
