import {  useAppSelector } from "./store/hooks";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = localStorage.getItem("is_authenticated");
  const isAuthenticated = auth ? JSON.parse(auth) : false;
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
