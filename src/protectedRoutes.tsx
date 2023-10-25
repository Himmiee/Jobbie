import {  useAppSelector } from "./store/hooks";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.login.isAuthenticated
  );
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
