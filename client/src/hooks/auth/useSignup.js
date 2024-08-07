import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { register } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { setSessionData } from "../../utils/userData";

export default function useSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function signup(entries) {
    setIsLoading(true);
    setError(null);

    try {
      const user = await register(entries);

      dispatch({ type: "LOGIN", payload: user });
      setSessionData("user", user);
      navigate("/");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { signup, isLoading, error };
}
