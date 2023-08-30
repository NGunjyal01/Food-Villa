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
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/about"
import Error from "./components/error"
import Contact from "./components/contact"
import RestaurantMenu from "./components/restaurantMenu";

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);