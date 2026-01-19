import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";
import { auth } from "../../../firebase.init";
import ProductLoader from "@/components/Loader";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleRegisters = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogOut = () => {
    return signOut(auth)
      .then(() => setUser(null))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    handleSignIn,
    user,
    setUser,
    loading,
    handleRegisters,
    handleLogIn,
    handleLogOut,
  };

  if (loading) {
    return <ProductLoader></ProductLoader>;
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
