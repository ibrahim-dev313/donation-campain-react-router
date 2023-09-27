import { createBrowserRouter } from "react-router-dom";
import DonationDetails from "../Pages/DonationDetails";
import Donations from "../Pages/Donations";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Stats from "../Pages/Stats";
import MainLayout from "../layout/MainLayout";


const customRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: "/donation/:id",
                element:<DonationDetails></DonationDetails>,
                loader: ()=>fetch('/data.json')
            },
            
        ]
    }
]) 

export default customRoute;