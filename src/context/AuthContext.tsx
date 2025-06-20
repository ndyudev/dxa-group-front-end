'use client';
import { createContext } from 'react';

// Define the shape of your context data
export interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    user: any; // Replace 'any' with a proper User type later
    error: any;
    login: (formData: any) => Promise<void>;
    register: (formData: any) => Promise<void>;
    logout: () => void;
    loadUser: () => Promise<void>;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
