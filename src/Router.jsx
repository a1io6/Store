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


const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "cartlist", element: <CartList /> },
            { path: "iphone", element: <Iphone /> },
            { path: "nokia", element: <Nokia /> },
            { path: "redmi", element: <Redmi /> },
            { path: "samsung", element: <Samsung /> },
            { path: "sony", element: <Sony /> },
            { path: "xiaomi", element: <Xioami /> },
            { path: "airpods", element: <AirPots /> },
            { path: "headphones", element: <Headphones /> },
            // {
            //     path: "cartlist",
            //     element: <CartList />
            // },
            {
                path: "auther",
                element: <Auther />
            },
        ]
    }
]);

export default myRouter;
