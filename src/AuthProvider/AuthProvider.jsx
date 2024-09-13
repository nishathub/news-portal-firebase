import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase_config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const NewsContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState('');

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logoutUser = () => {
        return signOut(auth);
    }

    const updateUser = (Name, photoLink) => {
       return updateProfile(auth.currentUser, { displayName: Name, photoURL: photoLink})
    }

    const loginWithGoogle = () => {
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider)
    }

    const loginWithGithub = () => {
        const GitProvider = new GithubAuthProvider();
        return signInWithPopup(auth, GitProvider)
    }

    const getLocation = (url) => {
        setLocation(url);
    }

    useEffect(()=> {
       const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authData = { registerUser, loginUser, logoutUser, updateUser, loginWithGoogle, loginWithGithub, getLocation, user, loading, location};
    return (
        <NewsContext.Provider value={authData}>
            {children}
        </NewsContext.Provider>
    );
};

export default AuthProvider;