
// make a simple nav bar with few menu items
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
             <NavLink exact to="/" >Home</NavLink> 
             <NavLink to="about">About</NavLink>
             <NavLink to="contact">Contact</NavLink>
        </nav>
    );
}

export default Navbar;