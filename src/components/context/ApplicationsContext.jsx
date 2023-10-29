import { createContext, useState } from "react";
const ApplicationContext = createContext();

function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState(null);
  const data = { applications, setApplications };
  return (
    <ApplicationContext.Provider value={data}>
      {children}
    </ApplicationContext.Provider>
  );
}

export { ApplicationProvider };

export default ApplicationContext;
