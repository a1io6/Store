// import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import CartList from "./cart/CartList";
import Iphone from "./page/iphone/Iphone";
import Nokia from "./page/nokia/Nokia";
import Redmi from "./page/redmi/Redmi";
import Samsung from "./page/samsung/Samsung";
import Sony from "./page/sony/Sony";
import Xioami from "./page/xioami/Xioami";
import AirPots from "./home/airpots/Airpots";
import Headphones from "./home/headphones/Headphones";
import { createBrowserRouter } from "react-router-dom";
import Auther from "./auth/Auther";
import Finall from "./auth/Finall";
import Condition from "./condition/Condition";
import Register from "./register/Register";
import LogIn from "./register/LogIn";
import AdminLayout from "./admin/AdminLayout";
import MainPages from "./admin/main/MainPages";
import Products from "./admin/products/Products";
import Phone from "./page/phone/Phone";
import Shopping from "./admin/shop/Shopping";
import Case from "./home/case/Case";
import Favorite from "./page/favorite/Favorite";
import ListPhone from "./page/ListPhone";
import Contact from "./contact/contact";
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/",
              element: <Home /> 
            },
            { path: "cartlist", 
              element: <CartList /> 
            },
            { path: "/favorite", 
            element: <Favorite /> 
            }, 
            { path: "iphone", 
              element: <Iphone /> 
            },
            { path: "nokia", 
              element: <Nokia /> 
            },
            { path: "redmi",
              element: <Redmi /> 
            },
            { path: "samsung", 
              element: <Samsung /> 
            },
            { path: "sony",
              element: <Sony /> 
            },
            { path: "xiaomi", 
              element: <Xioami /> 
            },
            { path: "airpods",
              element: <AirPots /> 
            },
            { path: "headphones", 
              element: <Headphones />
            },
            {
              path: "case",
              element: <Case/>
            },
            {
                path: "finall",
                element: <Finall />
            },
            {
                path: "auther",
                element: <Auther />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <LogIn />
            },
            {
                path: "/phone/:name",
                element: <Phone />
            },
            {
                path: "condition",
                element: <Condition />
            },{
                path: "listphone",
                element: <ListPhone />
            },
            {
                path: "contact",
                element: <Contact />
            },

        ]
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <MainPages />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/shopping",
                element: <Shopping />
            }
        ]
    }
]);

export default myRouter;
