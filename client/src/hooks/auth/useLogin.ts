import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { login } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { setSessionData } from "../../utils/userData";
import type { InitialValuesLogin } from "../../types/auth";

export default function useLogin() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function handleLogin(entries: InitialValuesLogin) {
    setIsLoading(true);
    setError(null);

    try {
      const user = await login(entries);

      dispatch({ type: "LOGIN", payload: user });
      setSessionData("user", user);
      navigate("/");
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { handleLogin, isLoading, error };
}
