import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { register } from "../../api/apiAuth";
import { setSessionData } from "../../utils/userData";
import type { InitialValuesRegister } from "../../types/auth";

export default function useSignup() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function signup(entries: InitialValuesRegister) {
    setIsLoading(true);
    setError(null);

    try {
      const user = await register(entries);

      dispatch({ type: "LOGIN", payload: user });
      setSessionData("user", user);
      navigate("/");
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { signup, isLoading, error };
}
