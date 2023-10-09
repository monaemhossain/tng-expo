import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loader, setLoader] = useState(true)

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    
    const googleLogIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)

    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
            // console.log("logged in from useEffect");
            if (loggedInUser) {
                //   const uid = user.uid;
                console.log("logged in");
                setLoader(false )

            } else {
                console.log("user logged out");
                setLoader(false)
            }
        });
        return unSubscribe;

    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const AuthInfo = { user, createUser, logInUser, googleLogIn, logOut, loader }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}