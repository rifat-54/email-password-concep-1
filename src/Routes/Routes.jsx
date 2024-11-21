import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLoayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Ph from "../components/Ph/Ph";
import PhChild from "../components/PhChild/PhChild";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import Statis from "../components/Statis/Statis";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/profile',
                element:<PrivateRoutes>
                    <Profile></Profile>
                </PrivateRoutes>
            },
            {
                path:'/statis',
                element:<PrivateRoutes>
                    <Statis></Statis>
                </PrivateRoutes>
            },
            {
                path:'/about',
                element:<About></About>,
                children:[
                    {
                        path:'/about/ph',
                        element:<Ph></Ph>,
                        children:[
                            {
                                path:'/about/ph/phchild',
                                element:<PhChild></PhChild>
                            }
                        ]
                    }
                ]
            }
        ]
    }
])


export default routes;