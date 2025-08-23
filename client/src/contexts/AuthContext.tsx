import { createContext, useContext, useReducer } from "react";

import { getSessionData } from "../utils/userData";

import type { PropsChildren } from "../types/props";
import type { User } from "../types/auth";

type AuthState = {
  user?: User;
};

type AuthContextType = AuthState & {
  dispatch: React.Dispatch<AuthAction>;
  isOwner: (id: string) => boolean;
};

type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  dispatch: () => {},
  isOwner: () => false,
});


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: undefined };
    default:
      return state;
  }
};

export default function AuthProvider({ children }: PropsChildren) {
  const user: User | undefined = getSessionData("user");
  const [state, dispatch] = useReducer(authReducer, {
    // TODO: fix logic. The user data should not be seen in the browser :)
    user: user,
  });

  const isOwner = (id: string) => state.user?._id === id;
  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, isOwner }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
