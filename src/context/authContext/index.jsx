import { useEffect, useState } from "react";
import auth from "../../firebase";
const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => { 
    const [currentuser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            
            if (user) {
                setCurrentUser({...user});
                setUserLoggedIn(true)
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            } 
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = { currentuser, userLoggedIn, loading };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}