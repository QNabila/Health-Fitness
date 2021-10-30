import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.init';
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    // for reloading issue
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider);           
    }
     // for sign out
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(()=>setIsLoading(false));
    }
    
    // for tracking whather user is logged in or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
    }, [])
   
    return {
        user,
        signInUsingGoogle,
        logout,
        isLoading
    }
}
export default useFirebase;