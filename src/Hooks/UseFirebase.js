import axios from "axios";
import initializeAuthentication from '../Configs/Firebase/FirebaseInitialize'
import { useEffect, useState } from "react";
import {
    getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, updateProfile, getIdToken, signOut
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState("");
    const [token, setToken] = useState("");

    /* Redirect */
    /* const location = useLocation();
    const history = useHistory();

    // Inputs
    const [loginData, setLoginData] = useState({});
    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Passwords did not match');
            return
        }
        //register(loginData.email, loginData.password, location, history)
        register(loginData.email, loginData.password)
        e.preventDefault();
    } */

    /* Email Register */
    const register = (email, password, name, img, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const data = userCredential.user;
                history.push('/');
                const newUser = { email, displayName: name, photoURL: img };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: img
                }).then(() => {
                    axios.post('https://serene-caverns-27431.herokuapp.com/user', newUser)
                        .then(res => { })
                }).catch((error) => {
                });
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    /* Email Login */
    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const redirect_url = location.state?.from || '/';
                history.replace(redirect_url);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        /* .then((result) => {
            setUser(result.user);
            setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false)); */
    }

    /* Observer */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // admin
    useEffect(() => {
        fetch(`https://serene-caverns-27431.herokuapp.com/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    // logout
    const logout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => setLoading(false));
    }

    return {
        user,
        admin,
        token,
        loading,
        error,
        register,
        loginUser,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;