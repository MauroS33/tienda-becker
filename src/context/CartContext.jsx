import { createContext, useState } from "react";

const cartContext = createContext()

const CartProvider = ( {children} ) => {    /* antes de añadir un producto, deberia chequear si ya existe en el carrito y tambien verificar stock */
    const [cart, setCart] = useState ( [] )

    const addProductInCart = (newProduct) => { 
        /* para comprobar si el prod ya esta en el carrito */
        const tempCart = [...cart]
        const indexProduct = cart.findIndex ( (productCart) => productCart.id === newProduct.id )

        console.log(newProduct)
        if (indexProduct >=0){
            /* si ya esta agregado sumarle nueva cantidad */
            tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + newProduct.quantity
            setCart(tempCart)
        }else{
            /* agregar como nuevo producto */
            setCart( [ ...cart, newProduct ] )
        }

    }

    const deleteProductById = (idProduct) => {
        const productsFilter = cart.filter( (productCart)=> productCart.id !== idProduct)
        setCart(productsFilter)
    }

    const deleteCart = () => {
        setCart([])
    }

    const totalQuantity = () => {  /* agregar aqui codigo para ver en el carrito la suma total del precio */
        const quantity = cart.reduce ((total, productCart) => total + productCart.quantity, 0 )
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce( (total, productCart) => total + (productCart.quantity * productCart.price), 0 )
        return price
    }

    /* console.log(cart) */
    return(
        <cartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart } }>
            {children}
        </cartContext.Provider>
    )
}

export { cartContext, CartProvider }