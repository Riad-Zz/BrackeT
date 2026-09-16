import { createBrowserRouter } from "react-router"
import Root from "@/Layouts/RootLayout/Root"
import HomePage from "@/Pages/HomePage/HomePage/HomePage"
import ErrorPage from "@/Pages/Shared/ErrorPage/ErrorPage"
// import About from "@/Pages/HomePage/About/About"
export const router = createBrowserRouter([
    {
        path : '/' ,
        Component : Root ,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {index : true , Component : HomePage} ,
        ]
    },
    {
        path : '*' ,
        Component : ErrorPage
    }
])