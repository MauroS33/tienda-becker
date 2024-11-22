import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForms from "../../utils/validateForms.js"
import { toast } from "react-toastify"
import { object, string, mixed } from "yup"
import "./checkout.css"


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


    const handleSubmitForm = async( event ) => {
        event.preventDefault()

        const order = {
            buyer: { ...dataForm },
            producs: [ ...cart ],
            date: Timestamp.fromDate( new Date() ),
            total: totalPrice()
        }

        const response = await validateForms(dataForm)
        if(response.status === "success"){
            uploadOrder(order)
        }else{
            toast.error(response.message)
        }
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection( db, "orders")
        addDoc(ordersRef, newOrder)
            .then( (response) => {
                setIdOrder(response.id)
            })
            .finally(()=>{
                deleteCart()
                toast.success("Compra realizada, tu orden será entregada en los proximos 5 dias habiles.")
            } )
    }

  return (
    <div className="checkout">
        {
            idOrder === null ? (
                <form onSubmit={handleSubmitForm} className="form">
                    <h2 className="title">Datos para la factura</h2>
                    <div className="input">
                        <label className="label">Nombre comprador</label>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Juan Perez"/>
                    </div>

                    <div className="input">
                    <label className="label">Numero de contacto</label>
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="099123456"/>
                    </div>

                    <div className="input">
                    <label className="label">Correo electronico</label>
                <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="e-Mail"/>
                    </div>
                <button type="submit" className="send">Completar compra</button>
              </form>
            ):(
                <div className="end">
                    <h2>Orden generada de manera correcta.</h2>
                    <h3>Favor de guardar su numero de orden: {idOrder} </h3>
                    <p>Por cualquier consulta o sugerencia no dude en contactarnos a cab@clubatleticobecker.com</p>
                    <button className="home"><Link to="/">Volver a la tienda</Link></button>
                    <h4>O tambien puedes visitar nuestras redes</h4>
                    <div className="social">
                        <a href="https://www.instagram.com/clubatleticobecker/"><img src="/img/escudos/instagram.png" alt="instagram logo" /></a>
                        <a href="https://www.facebook.com/groups/29375898755"><img src="/img/escudos/facebook.gif" alt="facebook logo" /></a>
                    </div>
                </div>
            )
        }

    </div>
  )
}

export default Checkout
