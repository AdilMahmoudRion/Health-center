import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
// log out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

 // toggle log in
 const toggleLogin = (e) => {
   setIsLogin(e.target.checked);
 };
// handleing name change
 const handleNameChange = (e) => {
   setName(e.target.value);
  };
  
  // handling email change
 const handleEmailChange = (e) => {
   setEmail(e.target.value);
 };

  
  // handling password change
 const handlePasswordChange = (e) => {
   setPassword(e.target.value);
 };

  
  // handle registration
 const handleRegistration = (e) => {
   e.preventDefault();
   if (password.length < 6) {
     setError("Password Must be at least 6 characters long.");
     return;
   }
   if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
     setError("Password Must contain 2 upper case");
     return;
   }

   if (isLogin) {
     processLogin(email, password);
   } else {
     registerNewUser(email, password);
   }
 };
// log in process
 const processLogin = (email, password) => {
   signInWithEmailAndPassword(auth, email, password)
     .then((result) => {
       const user = result.user;
       console.log(user);
       setError("");
     })
     .catch((error) => {
       setError(error.message);
     });
 };
// register new user
 const registerNewUser = (email, password) => {
   createUserWithEmailAndPassword(auth, email, password)
     .then((result) => {
       const user = result.user;
       console.log(user);
       setError("");
       verifyEmail();
       setUserName();
     })
     .catch((error) => {
       setError(error.message);
     });
 };

 const setUserName = () => {
   updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  // email verification

 const verifyEmail = () => {
   sendEmailVerification(auth.currentUser).then((result) => {

   });
 };

 const handleResetPassword = () => {
   sendPasswordResetEmail(auth, email).then((result) => {});
 };


    return {
      user,
      isLoading,
      signInUsingGoogle,
      logOut,
      handleRegistration,
      isLogin,
      handleNameChange,
      handleEmailChange,
      handlePasswordChange,
      toggleLogin,
      handleResetPassword,
      error
    };
}

export default useFirebase;