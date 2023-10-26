import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import AuthContext from "./AuthContext";
import { getApplicationsByUser } from "../../helpers/ApplicationsHelpers";
const ApplicationContext = createContext();

function ApplicationProvider({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    const fetchData = async (user) => {
      try {
        const res = await getApplicationsByUser(user.email);

        setApplications(res);
      } catch (err) {
        console.log("Error in fetchData:", err);
      }
    };
    if (currentUser) fetchData(currentUser);
  }, [currentUser]);

  const data = { applications };
  return (
    <ApplicationContext.Provider value={data}>
      {children}
    </ApplicationContext.Provider>
  );
}

export { ApplicationProvider };

export default ApplicationContext;
