import { createContext, useState, useContext, useEffect } from "react";
import {auth} from '../utils/firebase'

const AddContext = createContext();

export function useLocalContext() {
    return useContext(AddContext)
}

export function ContextProvider({ children }) {

    const [createLoginDialog, setCreateLoginDialog] = useState(false);

    const [createRegisterDialog, setCreateRegisterDialog] = useState(false);

    const [createForgotDialog, setCreateForgotDialog] = useState(false);

    const [createClassDialog, setCreateClassDialog] = useState(false);

    const [createFormDialog, setCreateFormDialog] = useState(false);

    const [createaccountDialog, setCreateaccountDialog] = useState(false);

    const [createManageDialog, setCreateManageDialog] = useState(false);

    const [joinClassDialog, setJoinClassDialog] = useState(false);

    const [createSchoolDialog, setCreateSchoolDialog] = useState(false);

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
        createForgotDialog,
        setCreateForgotDialog,
        createRegisterDialog,
        setCreateRegisterDialog,
        createClassDialog,
        setCreateClassDialog,
        createFormDialog,
        setCreateFormDialog,
        joinClassDialog,
        setJoinClassDialog,
        createaccountDialog,
        setCreateaccountDialog,
        createManageDialog,
        setCreateManageDialog,
        createSchoolDialog,
        setCreateSchoolDialog,
        loggedInMail,
        loggedInUser
    };

    return (
        <AddContext.Provider value={value}>
            {children}
        </AddContext.Provider>
    )
}