import React, { createContext, useContext, useEffect, useReducer, useMemo } from "react";

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