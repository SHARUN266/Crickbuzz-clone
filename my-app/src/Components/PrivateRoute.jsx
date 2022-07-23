import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../useContext";

export const PrivateRoute = ({ children }) => {
  const { isAuth, setIsAuth } = useContext(UserContext);

  let bool = JSON.parse(localStorage.getItem("bool"));

  setIsAuth(bool);
  if (isAuth === false) {
    return <Navigate to="/SignIn" />;
  } else if (isAuth === true) {
    return children;
  }
};
