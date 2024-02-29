import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    // delete user from the storage
    localStorage.removeItem("user");
    //setting {user:null} fire up LOGOUT
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
