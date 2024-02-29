import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//costume hook and checks if we aren't using context outside og the root component
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("must be used inside the contextProvider");
  }
  return context;
};
