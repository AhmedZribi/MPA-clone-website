import {useState,React} from 'react'
import Logo from '../img/logo.svg'
import {FaBars, FaTimes} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <>
            <nav className ="navBar">
                <div className="logo">
                    <NavLink exact to ="/" onClick={() => closeMenu()}><img src ={Logo} alt="MP Logo" /></NavLink>
                </div>
                <p id="hamburger" onClick={handleToggle}>{navbarOpen ? <FaTimes /> : <FaBars />}</p>
                <ul className={`navList ${navbarOpen ? " showMenu" : ""}`}>
                    <li><NavLink exact to= "/" onClick={() => closeMenu()}>Home</NavLink></li>
                    <li><NavLink to="/incubator" onClick={() => closeMenu()}>Incubator</NavLink></li>
                    <li><NavLink to="/learn" onClick={() => closeMenu()}>Learn</NavLink></li>
                </ul>
            </nav>
        </>
    )
}


export default NavBar
