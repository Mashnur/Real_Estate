import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Estates from "../pages/Home/Estate/Estates";
import EstateDetails from "../pages/EstateDetails/EstateDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        index: true,
                        element: <Estates></Estates>
                    },
                    {
                        path: 'category/:type',
                        element: <Estates></Estates>
                    }
                ]
            },
            {
                path: 'estate/:id',
                element: <EstateDetails></EstateDetails>
            }
        ]
    }
])
export default routes;