import { createBrowserRouter, } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import NewsDetail from "../Pages/NewsDetail/NewsDetail";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/Login",
                element: <Login></Login>
            },
            {
                path: "/Registration",
                element: <Registration></Registration>
            },
            {
                path: "/About",
                element: <PrivateRoutes><About></About></PrivateRoutes>
            },
            {
                path: "/Career",
                element: <PrivateRoutes><Career></Career></PrivateRoutes>
            },
            {
                path: "/NewsDetail/:id",
                element: <PrivateRoutes><NewsDetail></NewsDetail></PrivateRoutes>,
                loader: () => fetch('/news.json')
            },
        ]
    },
]);

export default routes;