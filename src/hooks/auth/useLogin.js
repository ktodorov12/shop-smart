import { useState } from "react";
import useAuthContext from "./useAuthContext";
import { login } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { setSessionData } from "../../utils/userData";

export default function useLogin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function handleLogin(entries) {
    setIsLoading(true);
    setError(null);

    try {
      const user = await login(entries);

      if (!user) {
        //TODO fix logic
        throw Error("No user");
      }

      dispatch({ type: "LOGIN", payload: user });
      setSessionData("user", user);
      navigate("/");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { handleLogin, isLoading, error };
}
