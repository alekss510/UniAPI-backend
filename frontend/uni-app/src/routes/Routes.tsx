import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Homepage } from "../pages/Homepage";
import { Coursepage } from "../pages/Coursepage";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./PrivateRoute";



export const router = createBrowserRouter([
    
    {
        path: "/",
        element: <App />,
        children: [ 
            {path: "", element:<Login/>},
            {
                path: "/",
                element: <PrivateRoutes />,
                children: [
                    {path: "auswahl", element: <Homepage/>,},
                    {path: ":course", element: <Coursepage/>},
                ]
            }
            

        ]
    },
   
])
 

