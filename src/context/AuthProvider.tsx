'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// --- Helper to set auth token for axios ---
const setAuthToken = (token: string | null) => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

// --- Initial State and Reducer ---
const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
};

const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'LOGOUT':
        case 'REGISTER_FAIL':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload,
            };
        case 'CLEAR_ERRORS':
            return { ...state, error: null };
        default:
            return state;
    }
};

// --- Auth Context ---
interface AuthContextType {
    state: typeof initialState;
    loadUser: () => Promise<void>;
    register: (formData: any) => Promise<void>;
    login: (formData: any) => Promise<void>;
    logout: () => void;
    clearErrors: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Auth Provider Component ---
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Set token on initial load
    useEffect(() => {
        if (state.token) {
            setAuthToken(state.token);
            loadUser();
        } else {
            // Ensure loading is set to false if no token
            dispatch({ type: 'AUTH_ERROR' });
        }
    }, []);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get(`${API_URL}/auth/me`);
            dispatch({ type: 'USER_LOADED', payload: res.data });
        } catch (err) {
            dispatch({ type: 'AUTH_ERROR' });
        }
    };

    const register = async (formData: any) => {
        const config = { headers: { 'Content-Type': 'application/json' } };
        try {
            const res = await axios.post(`${API_URL}/auth/register`, formData, config);
            dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
            await loadUser();
        } catch (err: any) {
            dispatch({ type: 'REGISTER_FAIL', payload: err.response?.data?.msg || 'Registration failed' });
        }
    };

    const login = async (formData: any) => {
        const config = { headers: { 'Content-Type': 'application/json' } };
        try {
            const res = await axios.post(`${API_URL}/auth/login`, formData, config);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
            await loadUser();
        } catch (err: any) {
            dispatch({ type: 'LOGIN_FAIL', payload: err.response?.data?.msg || 'Login failed' });
        }
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const clearErrors = () => {
        dispatch({ type: 'CLEAR_ERRORS' });
    };

    return (
        <AuthContext.Provider value={{ state, loadUser, register, login, logout, clearErrors }}>
            {children}
        </AuthContext.Provider>
    );
};

// --- Custom Hook to use Auth ---
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 