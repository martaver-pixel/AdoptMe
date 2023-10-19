import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
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
    };

    checkUser();
  }, [currentUser]);

  const data = { currentUser };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export { AuthProvider };

export default AuthContext;
