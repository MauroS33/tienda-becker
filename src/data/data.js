const products = [
    {
        id: "reju1",
        name: "Casaca Verde",
        description: "Remera de juego para partidos de local, estilo clasico de Adidas decada 90s en verde con vivos en rojo amarillo y negro. Escudo vinilico y logo de los 15 años.",
        price: 2000,
        stock: 10,
        image: "/img/remera-verde-nueva.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },  
    {
        id: "reju2",
        name: "Casaca Gris",
        description: "Remera para oficiar de visitante en color gris metalizado, escudo vinilico y logo de los 15 años.",
        price: 2000,
        stock: 10,
        image: "/img/remera-gris.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "reju3",
        name: "Casaca Golero",
        description: "Remera de juego para portero, diseño en negro con alusion al clasico de la primer casaca del Club",
        price: 2000,
        stock: 10,
        image: "/img/remera-alt.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "shju1",
        name: "Short Local",
        description: "Short en negro con las lineas clasicas de Adidas formando nuestra bandera.",
        price: 800,
        stock: 10,
        image: "/img/short.jpg", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "shju2",
        name: "Short Alternativo",
        description: "Short para usar con la indumentaria de visitante, color negro y con las lineas modernas de Adidas a tono de nuestra bandera.",
        price: 800,
        stock: 10,
        image: "/img/short2.png", /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },
    {
        id: "reen1",
        name: "Casaca de Entrenamiento",
        description: "Remera de entrenamiento para los partidos oficiales, base negra con formas geometricas verdes, amarillas y rojas.",
        price: 1500,
        stock: 10,
        image: "/img/geometrica.png",
        category: "ropa de entrenamiento"
    },
    {
        id: "reen2",
        name: "Casaca de Eventos",
        description: "remera alternativa de entrenamiento para eventos deportivos extraoficiales, remera de algodon a rayas horizontales finas verdes, amarillas y rojas.",
        price: 1500,
        stock: 10,
        image: "/img/stripes.png",
        category: "ropa de entrenamiento"
    },
    {
        id: "eqen1",
        name: "Equipo de Entrenamiento",
        description: "Equipo de entrenamiento de media estación, pantalon con bolsillos en negro y campera con cierre y bolsillos con el diseño bandera.",
        price: 4500,
        stock: 10,
        image: "/img/jumpsuit.jpg",
        category: "ropa de entrenamiento"
    },
    {
        id: "acc1",
        name: "Gorra",
        description: "Gorra negra con logo bordado rasta",
        price: 590,
        stock: 100,
        image: "/img/gorra.jpg",
        category: "accesorios"
    },
    {
        id: "acc2",
        name: "Bufanda",
        description: "Bufanda bandera rasta sin escudo",
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