import { createContext, useEffect, useState } from "react";
import { getCat } from "../../helpers/CatsHelpers";
const CatContext = createContext();

function CatProvider({ children }) {
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCat(2);
        setCat(res);
      } catch (error) {
        console.log("Se ha producido un error:", error);
      }
    };
    fetchData();
  }, []);

  const data = {};
  return <CatContext.Provider value={data}>{children}</CatContext.Provider>;
}

export { CatProvider };

export default CatContext;
