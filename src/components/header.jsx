import logo from "../assets/shared/logo.svg";
import iconH from "../assets/shared/icon-hamburger.svg";
import iconX from "../assets/shared/icon-close.svg";
import {
    useLocation,
    Link
} from "react-router-dom";
import { useState } from "react";




function Header() {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    const [showMenu, setMenu] = useState("menu-hidden");
    const [hamburgerIcon, setHamburgerIcon] = useState(iconH);

    function toggleMenu() { 
        if (showMenu === "menu-hidden") {
            setMenu("menu-visible")
        } else {
            setMenu("menu-hidden")
        }
     }
     function toggleIcon() {
        if (hamburgerIcon === iconH) {
            setHamburgerIcon(iconX);
        } else {
            setHamburgerIcon(iconH);
        }
     }
    return (
        <header className="flex justify-between align-center">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo Image" />
                </Link>
            </div>
            <menu className={`flex justify-center ${showMenu}`}>
                <ul className="nav flex gap-4 font-berlow-condensed fs-nav-letter-spacing fs-nav-text uppercase">
                    <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                        <Link to="/" className="nav-link"><span className="mr-2 fw-bold">01</span>Home</Link>
                    </li>
                    <li className={`nav-item ${isActive('/destination') ? 'active' : ''}`}>
                        <Link to="/destination" className="nav-link"><span className="mr-2 fw-bold">02</span>Destination</Link>
                    </li>
                    <li className={`nav-item ${isActive('/crew') ? 'active' : ''}`}>
                        <Link to="/crew" className="nav-link"><span className="mr-2 fw-bold">03</span>Crew</Link>
                    </li>
                    <li className={`nav-item ${isActive('/technology') ? 'active' : ''}`}>
                        <Link to="/technology" className="nav-link"><span className="mr-2 fw-bold">04</span>Technology</Link>
                    </li>
                </ul>
            </menu>
            <div className="burger-menu">
                <button onClick={() => {toggleMenu(); toggleIcon()}}>
                    <img src={hamburgerIcon} alt="BurgerMenu" />
                </button>
            </div>
        </header>
    );
}

export default Header;