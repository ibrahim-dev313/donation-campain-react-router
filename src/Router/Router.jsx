import { createBrowserRouter } from "react-router-dom";
import Donations from "../Pages/Donations";
import Home from "../Pages/Home";
import Stats from "../Pages/Stats";
import MainLayout from "../layout/MainLayout";


const customRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: ()=>fetch('/data.json')
            },
            {
                path: "/donations",
                element:<Donations></Donations>,
            },
            {
                path: "/stats",
                element:<Stats></Stats>,
            }
            
        ]
    }
]) 

export default customRoute;