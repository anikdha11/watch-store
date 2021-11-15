import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, updateProfile, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import intilizationFirebase from "../Pages/Login/Login/Firebase/Firebase.init";

//intilization firebase app
intilizationFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider()
  const registerUser = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('')
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to database
        saveUser(email, name, "POST")
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          history.replace('/')
        }).catch((error) => {

        });

      })
      .catch((error) => {
        setAuthError(error.message);

      })
      .finally(() => setIsLoading(false));
  }
  const loginUser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        history.replace(destination);
        setAuthError('')
        console.log(userCredential.user)
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));;
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT")
        const destination = location?.state?.from || '/'
        history.replace(destination);
        setAuthError('')
      }).catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoading(false));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth])

  useEffect(() => {
    fetch(`https://secret-badlands-82308.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  const logOut = (history, location) => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      const destination = location?.state?.from || '/'
      history.replace(destination);
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));

  }

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch('https://secret-badlands-82308.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }


  return {
    user,
    admin,
    isLoading,
    authError,
    logOut,
    loginUser,
    registerUser,
    signInWithGoogle


  }


}

export default useFirebase;