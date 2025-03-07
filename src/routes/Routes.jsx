import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";
import CategorieCarts from "../components/CategorieCarts";
import CategoryDetails from "../components/CategoryDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/gadgets.json'),
                children:[
                    {
                        path: '/',
                        element: <CategorieCarts></CategorieCarts>,
                        loader: () => fetch('/categories.json')
                    },
                    {
                        path: '/category/:category',
                        element: <CategorieCarts></CategorieCarts>,
                        loader: () => fetch('/categories.json')
                    }
                ]
            },
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
            },
            {
                path: '/categoryDetials/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: () => fetch('/categories.json')
            }
        ]
    }
])

export { routes };