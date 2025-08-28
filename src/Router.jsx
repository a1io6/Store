import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Layout from "./layout/Layout";
import CartList from "./cart/CartList";
import Auther from "./auth/Auther";
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"/",
                element:<Home/>
            },{
                path:"cartlist",
                element:<CartList/>
            },
            {
                path:"auther",
                element:<Auther/>
            },
        
        ]
    }
])
export default myRouter