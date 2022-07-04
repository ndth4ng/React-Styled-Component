
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";

type ProtectedRouteProps = {
  redirectTo: string;
  children: JSX.Element;
}

function ProtectedRoute({ redirectTo, children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={redirectTo} />;
  } else return children;
}

export default ProtectedRoute;
