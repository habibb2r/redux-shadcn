import App from "@/App"
import Tasks from "@/Pages/Tasks/Tasks";
import Users from "@/Pages/Users/Users";
import { createBrowserRouter} from "react-router-dom"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                index: true,
                element: <Tasks></Tasks>
            },
            {
                path: "users",
                element: <Users></Users>
            }
        ]
    }
])

export default routes;