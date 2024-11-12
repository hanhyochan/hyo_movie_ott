import React, { createContext, useState, useContext, useEffect } from 'react';
import supabase from '../supabaseConfig'; // supabase 설정

const SessionContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session ? session : null);
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === 'SIGNED_OUT') {
                    setUser(null);
                } else if (session) {
                    setUser(session ? session : null);
                }
            }
        );

        console.log(subscription)

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <SessionContext.Provider value={{ user }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useAuth = () => useContext(SessionContext); // 상태를 소비하는 훅
