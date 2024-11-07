import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const userInfo = sessionStorage.getItem('username'); 

    if (!userInfo) {
        return <Navigate to="/" />;  
    }

    return children;  
};

export default ProtectedRoute;
