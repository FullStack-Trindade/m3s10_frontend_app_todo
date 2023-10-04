import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthService } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { auth, user, setAuth, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (data) => {
    setAuth(true);
    setUser(data?.login);

    await AuthService.Set(data?.login).then((response) => {
      console.log(response.message);
      navigate("/");
    });
  };

  const logout = async () => {
    setAuth(false);

    await AuthService.Clear().then((response) => {
      console.log(response.message);
      navigate("/login");
    });
  };

  return {
    auth,
    user,
    login,
    logout,
  };
};
