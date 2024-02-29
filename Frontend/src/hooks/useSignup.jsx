import { useState, useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const signup = async (email, password, username) => {
    setIsLoading(true);
    setError(null);
    // fetch data from the api
    const response = await fetch("http://localhost:3001/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });
    //retrun jwt if success
    const loggedinUser = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(loggedinUser);
    }
    // fire up the SIGNUP dispatch  , save the token in localstorage
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(loggedinUser));
      dispatch({ type: "SIGNUP", payload: loggedinUser });
      setIsLoading(false);
      navigate("/home");
    }
  };
  return { signup, isLoading, error };
};
