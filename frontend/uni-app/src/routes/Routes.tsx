import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Homepage } from "../pages/Homepage";
import { Coursepage } from "../pages/Coursepage";
import { Modulpage } from "../pages/Modulpage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [ 
            {path: "home", element: <Homepage/>},
            {path: "course", element: <Coursepage/>},
            {path: "course/modul", element: <Modulpage/>}

        ]
    }
])


/** für variable suchleite :course */