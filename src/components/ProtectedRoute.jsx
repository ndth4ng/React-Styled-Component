import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ redirectTo, children }) {
  const { isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={redirectTo} />;
  } else return children;
}

export default ProtectedRoute;
