import { useState, useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    // fetch data from the api
    const response = await fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    //retrun jwt if success
    const loggedinUser = await response.json();
    console.log("useLogin JSON", loggedinUser);

    if (!response.ok) {
      setIsLoading(false);
      setError(loggedinUser);
    }
    // fire up the LOGIN dispatch , save the token in localstorage
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(loggedinUser));
      dispatch({ type: "LOGIN", payload: loggedinUser });
      setIsLoading(false);
      navigate("/home");
    }
  };
  return { login, isLoading, error };
};
