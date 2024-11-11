import CartWidget from "./Cartwidget";
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            {/* <img src="/img/Logos/logo-redondo.jpg" alt="Logo Redondo" /> */}
            <ul className="categories">
                <li className="category">
                    <Link to="category/ropa de juego" >Ropa de juego</Link>
                </li>
                <li className="category">
                    <Link to="category/ropa de entrenamiento" >Ropa de entrenamiento</Link>
                </li>
                <li className="category">
                    <Link to="category/hinchada" >Hinchada</Link>
                </li>
            </ul>

            <Link to="/" className="brand primary-font-color">
{/*                 <BsBox className="icon-brand" /> */}
                <p className="title-brand ">Tienda Churrera</p>
            </Link>
            <CartWidget/>
        </nav>
    )
}


export default NavBar