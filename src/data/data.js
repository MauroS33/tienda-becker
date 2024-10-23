const products = [
    {
        id: "reju1",
        name: "home jersey",
        descripcion: "remera local",
        price: 2000,
        stock: 10,
        image: "/img/remera.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "reen1",
        name: "train jersey",
        descripcion: "remera entraniemto",
        price: 1500,
        stock: 10,
        image: "",
        category: "ropa de entrenamiento"
    },
    {
        id: "acc1",
        name: "gorra",
        descripcion: "gorra escudo",
        price: 290,
        stock: 100,
        image: "",
        category: "accesorios"
    }
]

const getProducts = () => {
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
        }, 2000 )
    } )   
}

export { getProducts }