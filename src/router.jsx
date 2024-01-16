import { App } from "components/App"
import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "pages/LoginPage"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/login',
                element: <LoginPage/> 
            },
            {
                path: '/dashboard',
                // element: <Dashboard/>
            }
        ]
    }
])