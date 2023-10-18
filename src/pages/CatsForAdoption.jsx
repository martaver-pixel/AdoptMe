import { useContext, useEffect, useState } from "react";
import { getCats } from "../helpers/CatsHelpers";
import { StyledCards, StyledHomeTitle } from "../styled";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Loading from "../components/Loading";
import LogInContext from "../components/context/LogInContext";

const CatsForAdoption = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);
  const navigate = useNavigate();
  const [cats, setCats] = useState(null);
  // const { data } = useContext(CatsContext);
  // console.log(data);

  console.log(isLoggedIn);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCats();
      setCats(res);
    };
    fetchData();
  }, []);

  const handleOnClick = (id) => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/home");
    } else {
      navigate(`/cats/${id}`);
    }
  };

  return (
    <div>
      <StyledHomeTitle>Adoptions available:</StyledHomeTitle>
      <StyledCards>
        {cats ? (
          cats.map((cat) => (
            <Card
              handleOnClick={handleOnClick}
              key={cat.id}
              id={cat.id}
              title={cat.name}
              titleDetail={cat.age}
              subtitle={cat.colors}
              description={cat.description}
              location={cat.location}
            />
          ))
        ) : (
          <Loading />
        )}
      </StyledCards>
    </div>
  );
};

export default CatsForAdoption;
