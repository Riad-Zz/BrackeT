import { createBrowserRouter } from "react-router"
import Root from "@/Layouts/RootLayout/Root"
import HomePage from "@/Pages/HomePage/HomePage/HomePage"
import ErrorPage from "@/Pages/Shared/ErrorPage/ErrorPage"
import AuthLayout from "@/Layouts/AuthLayout/AuthLayout"
import Login from "@/Pages/Authentication/Login"
import Register from "@/Pages/Authentication/Register"
import Problems from "@/Pages/Problems/Problems"
import pageLoader from "@/components/ui/pageLoader"
import ProblemDetails from "@/Pages/Problems/ProblemDetails"
// import About from "@/Pages/HomePage/About/About"
export const router = createBrowserRouter([
    {
        path : '/' ,
        Component : Root ,
        HydrateFallback : pageLoader ,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {index : true , Component : HomePage} ,
            {path : 'problems' , Component : Problems , loader :()=> fetch("/mockProblems.json")} ,
        ]
    },
    {
        path : 'problem/details/:slug' ,
        Component : ProblemDetails ,
        HydrateFallback : pageLoader ,
        errorElement : <ErrorPage></ErrorPage> ,
        loader : ()=>fetch("/mockProblems.json") ,
    },
    {
        path : '/' ,
        Component : AuthLayout ,
        HydrateFallback : pageLoader,
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