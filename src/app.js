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

import React, {lazy, Suspense} from "react";
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
import Profile from "./components/profile";
import Shimmer from "./components/shimmer";

const Instamart = lazy(()=>import("./components/Instamart"));


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
                children:[
                    {
                        path: "profile",
                        element: <Profile/>,
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurnt/:id",
                element: <RestaurantMenu/>,
            },
            {
                path: "instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);