import { createContext, useState } from "react";

const LogInContext = createContext(null);

function LogInProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const data = { isLoggedIn, setIsLoggedIn };
  return <LogInContext.Provider value={data}>{children}</LogInContext.Provider>;
}

export { LogInProvider };

export default LogInContext;
