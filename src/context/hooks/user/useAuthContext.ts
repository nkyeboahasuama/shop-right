import { useContext } from "react";
import { UserContext } from "../../user-context";

export const useAuthContext = () => {
  const context = useContext(UserContext);
  return context;
};
