'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../app/firebase';

const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const isLoggedIn = user !== null;
    const logout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, logout, isLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
