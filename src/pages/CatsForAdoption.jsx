import { useContext, useEffect, useState } from "react";
import { getCats, getCatImg } from "../helpers/CatsHelpers";
import { StyledCards, StyledHomeTitle } from "../styled";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { Grid } from "@mui/material";
import ApplicationContext from "../components/context/ApplicationsContext";

const CatsForAdoption = () => {
  const navigate = useNavigate();
  const [cats, setCats] = useState(null);
  const { applications } = useContext(ApplicationContext);
  console.log(applications, "fkjfe");
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCats();
      setCats(res);
    };

    fetchData();
  }, []);

  const handleOnClick = (id) => {
    navigate(`/AdoptMe/cats/${id}`);
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
              img={cat.imgURL}
              applications={applications}
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
