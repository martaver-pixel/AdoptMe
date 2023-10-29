import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      onAuthStateChanged(auth, setCurrentUser);
      onAuthStateChanged(auth, (user) => {
        if (user !== null) {
          setCurrentUser(user);
          setPending(false);
        }
      });

      const colRef = collection(db, "users");
      try {
        const appDocs = await getDocs(colRef);
        if (currentUser?.email === appDocs.docs[0].data().email) {
          setIsAdmin(appDocs.docs[0].data().isAdmin);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkUser();
  }, [currentUser]);

  const data = { currentUser, isAdmin };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export { AuthProvider };

export default AuthContext;
