import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase";

// value you are accessing
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const value = { currentUser, setCurrentUser }


    useEffect(() => {
        const unscubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user) 
            }
            setCurrentUser(user)
        })

        return unscubscribe
    }, [])

    return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
}