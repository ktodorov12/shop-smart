import { useNavigate } from "react-router-dom";
import { removeSessionData } from "../../utils/userData";
import useAuthContext from "./useAuthContext";
import { logOut } from "../../api/apiAuth";

export default function useLogout() {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  async function logout() {
    removeSessionData("user");

    navigate("/");
    dispatch({ type: "LOGOUT" });

    await logOut();
  }

  return { logout };
}
