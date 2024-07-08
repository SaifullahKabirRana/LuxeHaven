import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPages from "../components/ErrorPages";
import PropertyDetails from "../components/estates/PropertyDetails";



const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPages></ErrorPages>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/property/:id',
                element: <PropertyDetails></PropertyDetails>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;