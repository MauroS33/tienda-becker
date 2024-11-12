const products = [
    {
        id: "reju1",
        name: "Casaca verde clasica",
        description: "Remera de juego para partidos de local, modelo Adidas 2012 en verde con vivos en rojo amarillo y negro. Escudo bordado.",
        price: 2000,
        stock: 10,
        image: [ "/img/clasica.png", "/img/clasica1.png","/img/becker-clasica.png" ], /* la barra sola es una ruta absoluta a la carpeta public */
        category: "ropa de juego"
    },  
    {
        id: "reju2",
        name: "Casaca verde 90s",
        description: "Remera de juego para partidos de local, estilo clasico de Adidas decada 90s en verde con vivos en rojo amarillo y negro. Escudo vinilico y logo de los 15 años.",
        price: 2000,
        stock: 10,
        image: [ "/img/verde-adi90s.png", "/img/verde-adi90s1.png","/img/verde-adi90s2.png","/img/verde-adi90s3.png"], 
        category: "ropa de juego"
    },
    {
        id: "reju3",
        name: "Equipo Basket",
        description: "Remera y bermuda de juego para basket, diseño en verde.",
        price: 2400,
        stock: 16,
        image: ["/img/juego-basket.png","/img/juego-basket-frente.png","/img/juego-basket-espalda.png"], 
        category: "ropa de juego"
    },
    {
        id: "reju4",
        name: "Remera Negra",
        description: "Remera de juego, diseño en negro detalles en ambos lados de lineas Adidas tipo bandera.",
        price: 2000,
        stock: 13,
        image: ["/img/negra-dt.png","/img/negra-dt-esc-redo.png","/img/negra-dt-espalda.png","/img/negra-dt-manga.png"], 
        category: "ropa de juego"
    },
    {
        id: "shju1",
        name: "Short Local",
        description: "Short en negro con las lineas clasicas de Adidas formando nuestra bandera.",
        price: 800,
        stock: 17,
        image: ["/img/short.png", "/img/negra-dt-bordes.png","/img/negra-dt-bordes1.png"], 
        category: "ropa de juego"
    },
    {
        id: "shju2",
        name: "Short Alternativo",
        description: "Short para usar con la indumentaria de visitante, color negro y con las lineas modernas de Adidas a tono de nuestra bandera.",
        price: 800,
        stock: 12,
        image: ["/img/short2.png","/img/short3.png","/img/short4.png","/img/short5.png"], 
        category: "ropa de juego"
    },
    {
        id: "reen2",
        name: "Casaca de Eventos",
        description: "Remera alternativa de entrenamiento para eventos deportivos extraoficiales, remera de algodon a rayas horizontales finas verdes, amarillas y rojas.",
        price: 1500,
        stock: 8,
        image: ["/img/stripes.png","/img/stripes1.png"],
        category: "ropa de entrenamiento"
    },
    {
        id: "reen3",
        name: "Casaca de Entrenamiento de Basket",
        description: "Remera en negro con triengulos verdes, rojos y amarillos, escudo basket.",
        price: 1500,
        stock: 7,
        image: ["/img/triangulos-basket.png","/img/triangulos-basket1.png"],
        category: "ropa de entrenamiento"
    },
    {
        id: "eqen1",
        name: "Equipo de Entrenamiento",
        description: "Equipo de entrenamiento de media estación, pantalon con bolsillos en negro y campera con cierre y bolsillos con el diseño bandera.",
        price: 4500,
        stock: 3,
        image: ["/img/jumpsuit.png","/img/jumpsuit1.png"],
        category: "ropa de entrenamiento"
    },
    {
        id: "refan1",
        name: "Pack hincha",
        description: "Pack del hincha, una gorra negra con logo retro bordado rasta, remera verde escudo redondo grande y bufanda rasta.",
        price: 1690,
        stock: 100,
        image: ["/img/gorra.png","/img/david-t-shirt.png","/img/bufanda.png"],
        category: "hinchada"
    },
    {
        id: "refan2",
        name: "Campera de hinchada",
        description: "Campera con cierre en rojo con detalles verdes y amarillos, escudo redondo bordado y 100% de algodón.",
        price: 3500,
        stock: 11,
        image: ["/img/adidas-social.png"],
        category: "hinchada"
    },
    {
        id: "refan3",
        name: "Canguro logo de Basket",
        description: "Canguro en rojo con detalles verdes y amarillos o en amarillo con detalles en verde y rojo, el escudo basket bordado diagonal y numero de jugador favorito en la espalda, 100% de algodón.",
        price: 4500,
        stock: 4,
        image: ["/img/hoodiea1.png","/img/hoodiea2.png","/img/hoodier1.png","/img/hoodier2.png"],
        category: "hinchada"
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