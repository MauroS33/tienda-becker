import CartWidget from "./Cartwidget"

const NavBar = () => {
    return (
        <nav>
            <div className="marca">
                <h2>CAB</h2>
                <img src="../assets/logo nuevo.jpg" alt="logo" />
            </div>

            <ul>
                <li>Ropa de juego</li>
                <li>Ropa de entrenamiento</li>
                <li>Accesorios</li>
                <li>Ropa de abrigo</li>
            </ul>

            <CartWidget />
        </nav>
    )
}


export default NavBar