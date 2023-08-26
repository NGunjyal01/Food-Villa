import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./about"

const Title = () => {
    return (
        <img alt="logo" className="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"></img>
    );
};

const Header = () => {
    
    const [isLogedIn, setIsLogedIn] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/cart">cart</Link></li>
                </ul>
            </div>
            {isLogedIn ? <button onClick={ () => setIsLogedIn(false) }>Log Out</button> : 
            <button onClick={ () => setIsLogedIn(true) }>Log In</button>}
        </div>
    );
};

export default Header;