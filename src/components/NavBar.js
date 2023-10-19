import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/brbp-logo-cores-originais.jpeg';

// importing styles
import '../styles/navBar.css';

const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleclick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navContainer">
                    <div className="logoContainer">
                        <Link to="/">
                            <div className="logoDiv">
                                <p className="mylogoM">M<span className="myLogoDot">.</span></p>
                            </div>
                        </Link>
                    </div>

                    {/* adding event listener to the menu icon ( menu/x) */}
                    <div className="menuIcon" onClick={handleclick} >
                        {/* conditioning class name on whether on click state - like a toggle effect */}
                        <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
                    </div>

                    {/* conditioning class name on whether menu is active or not, sliding in and out*/}
                    <ul className={click ? "navMenu active" : "navMenu"}>

                        <li className="navItem">
                            <Link 
                                to="/Home" 
                                className="navLink"
                                onClick={closeMenu}>
                                Home
                            </Link>
                        </li>


                        <li className="navItem">
                            <Link
                                to="/About"
                                className="navLink"
                                onClick={closeMenu}>
                                About
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link
                                to="/GalleryPage"
                                className="navLink"
                                onClick={closeMenu}>
                                Gallery
                            </Link>
                        </li>

                        <li className="navItem">
                            <HashLink to="/Home#contact"
                                className="navLink"
                                onClick={closeMenu} smooth>
                                Contact
                            </HashLink>
                        </li>

                    </ul>
                </div>
            </nav>

        </>
    )
}

export default NavBar;