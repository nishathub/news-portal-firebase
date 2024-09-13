import { useContext } from "react";
import { NewsContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, getLocation, loading } = useContext(NewsContext);

    // sending last private url to auth.
    const location = useLocation();
    console.log(location.pathname);
    getLocation(location.pathname);

    if(loading){
        return <h2 className="text-2xl text-center">Loading..</h2>
    }
    if(user) {
        return children;
    }
    
    return <Navigate state={location.pathname} to={'/Login'}></Navigate>;
    // this state will be set as soon as a user try to access a private route without logged in.
    // we can use this url and redirect that user to the url just after login.
};

export default PrivateRoutes;