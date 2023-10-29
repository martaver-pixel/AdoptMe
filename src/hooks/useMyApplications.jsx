import { useContext, useEffect, useState } from "react";
import AuthContext from "../components/context/AuthContext";
import { getApplicationsByUser } from "../helpers/ApplicationsHelpers";
import ApplicationContext from "../components/context/ApplicationsContext";
import { useLocation } from "react-router-dom";

const useMyApplications = () => {
  const { currentUser } = useContext(AuthContext);
  const { applications, setApplications } = useContext(ApplicationContext);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    const fetchData = async (user) => {
      try {
        const res = await getApplicationsByUser(user.email);
        setApplications(res);
        setIsLoading(false);
      } catch (err) {
        console.log("Error in fetchData:", err);
      }
    };
    if (currentUser) fetchData(currentUser);
  }, [currentUser, setApplications, pathname]);
  return { applications, isLoading };
};

export default useMyApplications;
