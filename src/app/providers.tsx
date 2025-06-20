'use client';

import React, { createContext, useState, useMemo, ReactNode, useContext, useEffect, useReducer } from 'react';
import { PaletteMode } from '@mui/material';
import axios from 'axios';

// --- THEME ---
interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeMode must be used within a AppThemeProvider');
  return context;
}

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');
  useEffect(() => {
    try {
      const storedMode = localStorage.getItem('themeMode') as PaletteMode | null;
      if (storedMode) setMode(storedMode);
    } catch (error) { console.log("LocalStorage is not available"); }
  }, []);
  const toggleTheme = () => setMode((prev) => {
    const newMode = prev === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('themeMode', newMode); } catch (e) {}
    return newMode;
  });
  const value = useMemo(() => ({ mode, toggleTheme }), [mode]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// --- AUTH ---
const setAuthToken = (token: string | null) => {
    if (token) axios.defaults.headers.common['x-auth-token'] = token;
    else delete axios.defaults.headers.common['x-auth-token'];
};

const initialState = {
    token: null,
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
};

const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'USER_LOADED': return { ...state, isAuthenticated: true, loading: false, user: action.payload };
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return { ...state, ...action.payload, isAuthenticated: true, loading: false };
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'LOGOUT':
        case 'REGISTER_FAIL':
            localStorage.removeItem('token');
            return { ...state, token: null, isAuthenticated: false, loading: false, user: null, error: action.payload };
        case 'CLEAR_ERRORS': return { ...state, error: null };
        default: return state;
    }
};

interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    user: any;
    error: any;
    loadUser: () => Promise<void>;
    register: (formData: any) => Promise<void>;
    login: (formData: any) => Promise<void>;
    logout: () => void;
    clearErrors: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            loadUser();
        } else {
            dispatch({ type: 'AUTH_ERROR' });
        }
    }, []);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

    const loadUser = async () => {
        const token = localStorage.getItem('token');
        if (token) setAuthToken(token);
        try {
            const res = await axios.get(`${API_URL}/auth/me`);
            dispatch({ type: 'USER_LOADED', payload: res.data });
        } catch (err) {
            dispatch({ type: 'AUTH_ERROR' });
        }
    };

    const register = async (formData: any) => {
        try {
            const res = await axios.post(`${API_URL}/auth/register`, formData);
            dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
            await loadUser();
        } catch (err: any) {
            dispatch({ type: 'REGISTER_FAIL', payload: err.response?.data?.errors || [{ msg: 'Registration failed' }] });
        }
    };

    const login = async (formData: any) => {
        try {
            const res = await axios.post(`${API_URL}/auth/login`, formData);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
            await loadUser();
        } catch (err: any) {
            dispatch({ type: 'LOGIN_FAIL', payload: err.response?.data?.errors || [{ msg: 'Invalid Credentials' }] });
        }
    };

    const logout = () => dispatch({ type: 'LOGOUT' });
    const clearErrors = () => dispatch({ type: 'CLEAR_ERRORS' });

    return (
        <AuthContext.Provider value={{ ...state, loadUser, register, login, logout, clearErrors }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};

// --- COMBINED PROVIDER ---
export function AppProviders({ children }: { children: ReactNode }) {
    return (
        <AppThemeProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </AppThemeProvider>
    )
}
