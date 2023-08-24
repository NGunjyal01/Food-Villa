import { useState } from "react";

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
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
            {isLogedIn ? <button onClick={ () => setIsLogedIn(false) }>Log Out</button> : 
            <button onClick={ () => setIsLogedIn(true) }>Log In</button>}
        </div>
    );
};

export default Header;