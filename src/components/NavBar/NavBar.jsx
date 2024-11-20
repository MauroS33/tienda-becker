import CartWidget from "./Cartwidget";
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="/img/escudos/logo-redondo.png" alt="Logo Redondo" />
            <ul className="categories">
                <li className="category">
                    <Link to="category/ropa de juego" >Ropa de juego</Link>
                </li>
                <li className="category">
                    <Link to="category/ropa de entrenamiento" >Ropa de entrenamiento</Link>
                </li>
                <li className="category">
                    <Link to="category/hinchada" >Ropa Social</Link>
                </li>
            </ul>

            <Link to="/" className="home-store">
                <p className="title-brand ">Tienda Churrera</p>
            </Link>
            <CartWidget/>
        </nav>
    )
}


export default NavBar