import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
            }
        ]
    }
])

export { routes };