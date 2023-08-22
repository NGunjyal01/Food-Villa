/**
 * header
 *      logo
 *      nav items(right side)
 *      cart
 * body
 *      search bar
 *      resturant list
 *      resturant card
 *          image
 *          name
 *          rating
 *          cusines
 * footer
 *      links
 *      copyrightWS
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"
import { IMG_CND_URL } from "./constans";

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);