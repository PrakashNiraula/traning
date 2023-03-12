import { Navigate, Outlet } from "react-router-dom";

const userAuth = () => {
  const token = localStorage.getItem("user");
  console.log(token);
  if (token) {
    return true;
  } else {
    return false;
  }
};
const auth = userAuth();

const PrivateRoutes = () => {
  return !auth ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoutes;
