import { createBrowserRouter } from "react-router"
import Root from "@/Layouts/RootLayout/Root"
import HomePage from "@/Pages/HomePage/HomePage/HomePage"
import ErrorPage from "@/Pages/Shared/ErrorPage/ErrorPage"
import AuthLayout from "@/Layouts/AuthLayout/AuthLayout"
import Login from "@/Pages/Authentication/Login"
import Register from "@/Pages/Authentication/Register"
import { Loader } from "@/components/ui/Loader"
// import About from "@/Pages/HomePage/About/About"
export const router = createBrowserRouter([
    {
        path : '/' ,
        Component : Root ,
        HydrateFallback : Loader ,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {index : true , Component : HomePage} ,
        ]
    },
    {
        path : '/' ,
        Component : AuthLayout ,
        HydrateFallback : Loader,
        errorElement : <ErrorPage></ErrorPage> ,
        children : [
            {path : 'login' , Component : Login},
            {path : 'register' , Component : Register}
        ] ,
    },
    {
        path : '*' ,
        Component : ErrorPage
    }
])