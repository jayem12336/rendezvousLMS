import { createContext, useState, useContext, useEffect } from "react";
import {auth} from '../utils/firebase'

const AddContext = createContext();

export function useLocalContext() {
    return useContext(AddContext)
}

export function ContextProvider({ children }) {

    const [createLoginDialog, setCreateLoginDialog] = useState(false);

    const [createRegisterDialog, setCreateRegisterDialog] = useState(false);

    const [createClassDialog, setCreateClassDialog] = useState(false);

    const [joinClassDialog, setJoinClassDialog] = useState(false);

    const [loggedInUser, setLoggedInUser] = useState(null);

    const [loggedInMail, setloggedInMail] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setloggedInMail(authUser.email)
                setLoggedInUser(authUser)
            } else {
                setloggedInMail(null)
                setLoggedInUser(null)
            }
        })
        return () => unsubscribe();
    }, [])

    const value = {
        createLoginDialog,
        setCreateLoginDialog,
        createRegisterDialog,
        setCreateRegisterDialog,
        createClassDialog,
        setCreateClassDialog,
        joinClassDialog,
        setJoinClassDialog,
        loggedInMail,
        loggedInUser,


    };

    return (
        <AddContext.Provider value={value}>
            {children}
        </AddContext.Provider>
    )
}