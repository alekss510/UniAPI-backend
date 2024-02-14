import { Outlet, Navigate } from "react-router-dom";
import useToken from "../data/useToken";



export const PrivateRoutes = () => {
    const {token } = useToken()

    return(
        token ? <Outlet/> : <Navigate to = ""/>
    )
}