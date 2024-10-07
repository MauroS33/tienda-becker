import CartWidget from "./Cartwidget"

const NavBar = () => {
    return (
        <div>
            <div className="marca">
                <h2>Ecommerce</h2>
            </div>

            <ul>
                <li>Ropa de juego</li>
                <li>Ropa de entrenamiento</li>
                <li>Accesorios</li>
                <li>Ropa de abrigo</li>
            </ul>

            <CartWidget/>
        </div>
    )
}

export default NavBar