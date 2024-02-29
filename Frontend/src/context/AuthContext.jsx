import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  // dispatch actions(cases)
  switch (action.type) {
    case "SIGNUP":
      return { user: action.payload };
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
//useReducer = usestate
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  // when we reaload we will check if there is a state
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    // dispatch login action to update the global state
    // to match the user in the local storage
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log(state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {console.log("context state", state)}
      {children}
    </AuthContext.Provider>
  );
};
