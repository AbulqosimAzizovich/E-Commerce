import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "./../pages/About/About";
import Error from "./../pages/Error/Error";
import Layout from "../pages/Layout/Layout.jsx";
import Signup from "../pages/Auth/Signup.jsx";
import Signin from "../pages/Auth/Signin.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: < Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
    {
        path: '/sign-up',
        element: <Signup/>
    },
    {
        path: "/sign-in",
        element: <Signin/>
    }
])

export  default  router;