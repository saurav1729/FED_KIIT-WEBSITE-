import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Sign from "./Components/Sign";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


const AppLayout=()=>{
    return(
        <>
         <Outlet />
        </>
       
    )
}

const AppRoute=createBrowserRouter(
    [
        {
            path:"/",
            element:[<Header />, <Hero /> ,<About /> ,<Footer />],
        },
        {
            path:"/sign",
            element:<Sign />,
        },
        {
         path:"/form",
         element:[<Header />, <Form /> ,<Footer />],
        },
        {
            path:"/about",
            element:[<Header />, <Hero /> ,<About /> ,<Footer />],
        },
       
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute}/>)