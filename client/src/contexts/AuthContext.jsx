import { createContext, useReducer } from "react";
import { getSessionData } from "../utils/userData";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: undefined };
    default:
      return state;
  }
};

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: getSessionData("user"),
  });

  const isOwner = (id) => state.user?._id === id;
  console.log("AuthContext state: ", state);

  return <AuthContext.Provider value={{ ...state, dispatch, isOwner }}>{children}</AuthContext.Provider>;
}
