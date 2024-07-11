import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPages from "../components/ErrorPages";
import PropertyDetails from "../components/estates/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile";
import Contact from "../components/Contact";
import Team from "../components/Team";



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
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: '/team',
                element: <PrivateRoute><Team></Team></PrivateRoute>
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