import React, { createContext, useContext, useReducer } from "react";
import { client } from "../api/requests/services.gen";

const AuthContext = createContext();

const authReducer = (state, action) => {
  const interceptor = (request) => {
    request.headers.set("x-access-token", action.token);
    return request;
  };

  console.log(action);
  switch (action.type) {
    case "LOGIN":
      client.interceptors.request.use(interceptor);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.token,
        userId: action.userId, // save the ID of the user 
        _interceptor: interceptor,
      };
    case "LOGOUT":
      client.interceptors.request.eject(state._interceptor);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        userId: null, // reset the ID of the user
      };
    default:
      return state;
  }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    isAuthenticated: false,
    token: null,
    userId: null, // keep the ID in the state
  });

  const login = (token, userId) => dispatch({ type: "LOGIN", token, userId });
  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
