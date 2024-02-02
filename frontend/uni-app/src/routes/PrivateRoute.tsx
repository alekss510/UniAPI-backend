import { Outlet, Navigate } from "react-router-dom";
import useToken from "../components/useToken";



export const PrivateRoutes = () => {
    const {token } = useToken()

    /**useEffect(() => {
        console.log('Token in PrivateRoutes:', token);
      }, [token]);**/
    return(
        token ? <Outlet/> : <Navigate to = ""/>
    )
}