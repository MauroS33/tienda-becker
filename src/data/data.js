const products = [
    {
        id: "reju1",
        name: "home jersey",
        descripcion: "remera local",
        price: 2000,
        stock: 10,
        image: "/img/remera-verde-nueva.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },  
    {
        id: "reju2",
        name: "away jersey",
        descripcion: "remera visitante",
        price: 2000,
        stock: 10,
        image: "/img/remera-gris.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "reju3",
        name: "alt jersey",
        descripcion: "remera alterna",
        price: 2000,
        stock: 10,
        image: "/img/remera-alt.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "shju1",
        name: "home short",
        descripcion: "short local",
        price: 800,
        stock: 10,
        image: "/img/short.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "shju2",
        name: "away short",
        descripcion: "short visitante",
        price: 800,
        stock: 10,
        image: "/img/short2.png", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "reen1",
        name: "train jersey",
        descripcion: "remera entrenamiento",
        price: 1500,
        stock: 10,
        image: "/img/geometrica.png",
        category: "ropa de entrenamiento"
    },
    {
        id: "reen2",
        name: "alt train jersey",
        descripcion: "remera alterna de entrenamiento",
        price: 1500,
        stock: 10,
        image: "/img/stripes.png",
        category: "ropa de entrenamiento"
    },
    {
        id: "eqen1",
        name: "equipo entrenamiento",
        descripcion: "equipo de entrenamiento",
        price: 4500,
        stock: 10,
        image: "/img/jumpsuit.jpg",
        category: "ropa de entrenamiento"
    },
    {
        id: "acc1",
        name: "gorra",
        descripcion: "gorra escudo",
        price: 590,
        stock: 100,
        image: "/img/gorra.jpg",
        category: "accesorios"
    },
    {
        id: "acc2",
        name: "bufanda",
        descripcion: "bufanda escudo",
        price: 290,
        stock: 100,
        image: "/img/bufanda.png",
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