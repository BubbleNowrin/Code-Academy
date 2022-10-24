import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const githubSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = { user, googleSignIn, githubSignIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;