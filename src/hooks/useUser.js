import { useContext } from "react";
import { UserContext } from "../providers/User";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  //if (!user) throw new Error("useUser can only be used within a UserProvider");
  return { user, setUser };
};

export default useUser;
