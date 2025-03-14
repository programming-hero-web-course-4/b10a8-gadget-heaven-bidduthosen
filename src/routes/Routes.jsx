import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Dashbord from "../Pages/Dashbord";
import CategorieCarts from "../components/CategorieCarts";
import CategoryDetails from "../components/CategoryDetails";
import Statistics from "../Pages/Statistics";
import DashbordCart from "../components/DashbordCart";
import DashbordWishlist from "../components/DashbordWishlist";
import ErrorPage from "../components/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <Dashbord></Dashbord>,
                children: [
                    {
                        path: '/dashbord',
                        element: <DashbordCart></DashbordCart>
                    },
                    {
                        path: '/dashbord/wishlist',
                        element: <DashbordWishlist></DashbordWishlist>
                    }
                ]
            },
            {
                path: '/categoryDetials/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: () => fetch('/categories.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
        ]
    }
])

export { routes };