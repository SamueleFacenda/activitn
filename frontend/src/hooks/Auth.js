import React, { createContext, useContext, useEffect, useReducer, useMemo } from "react";
import { useQuery } from "./Api";

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLoading: false, isAuthenticated: true, token: action.token };
        case "LOGOUT":
            return { ...state, isLoading: false, isAuthenticated: false, token: null };
        default:
            return state;
    }
};

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, {
        isLoading: true,
        isAuthenticated: false,
        token: null,
    });

    const login = (token) => dispatch({ type: "LOGIN", token });
    const logout = () => dispatch({ type: "LOGOUT" });

    const options = useMemo(() => {}, []);
    const [ isLoading, data, error ] = useQuery("/auth/verify", options);
    useEffect(() => {
        if (isLoading)
            return;

        if (error) {
            logout();
            return;
        }

        if (data && data.isAuthenticated)
            login(data.token);
        else
            logout();

    }, [isLoading, data, error]);

    return (
        <AuthContext.Provider value={[ state, login, logout ]}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(){
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used within an AuthProvider");
    
    return context;
};

export { AuthProvider, useAuth };