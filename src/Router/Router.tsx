import { createBrowserRouter } from "react-router"
import Root from "@/Layouts/RootLayout/Root"
import HomePage from "@/Pages/HomePage/HomePage/HomePage"
export const router = createBrowserRouter([
    {
        path : '/' ,
        Component : Root ,
        children : [
            {index : true , Component : HomePage}
        ]
    }
])