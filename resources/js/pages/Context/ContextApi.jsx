// UserContext.js
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Load user data when app starts
        const username = localStorage.getItem('username');
        if (username) {
            setUser({ username });
        }
    }, []);

    const updateUser = (newUsername) => {
        localStorage.setItem('username', newUsername);
        setUser({ username: newUsername });
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
