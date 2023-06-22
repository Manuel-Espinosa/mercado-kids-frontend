import axios from "axios";
import useUser from "../hooks/useUser";

export const useLogin = () => {
  const { setUser } = useUser();

  const login = async (body) => {
    try {
      const response = await axios.post("http://localhost:5000/login", body, {
        withCredentials: true,
      });
      console.log(response.data);

      const { user } = response.data;
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return login;
};

export default useLogin;
