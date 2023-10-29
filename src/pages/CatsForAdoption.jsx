import { useContext, useEffect, useState } from "react";
import { getCats } from "../helpers/CatsHelpers";
import { StyledCards, StyledHomeTitle } from "../styled";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Loading from "../components/Loading";
import ApplicationContext from "../components/context/ApplicationsContext";

const CatsForAdoption = () => {
  const navigate = useNavigate();
  const [cats, setCats] = useState(null);
  const { applications } = useContext(ApplicationContext);
  console.log(applications, "app");
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCats();

      setCats(res);
    };

    fetchData();
  }, []);

  const handleOnClick = (name) => {
    navigate(`/cats/${name}`);
  };

  return (
    <div>
      <StyledHomeTitle>Adoptions available:</StyledHomeTitle>
      <StyledCards>
        {cats ? (
          cats.map((cat) => (
            <Card
              handleOnClick={() => handleOnClick(cat.name.toLowerCase())}
              key={cat.id}
              id={cat.id}
              title={cat.name}
              titleDetail={cat.age}
              subtitle={cat.colors}
              description={cat.description}
              location={cat.location}
              img={cat.imgURL}
              isApplied={applications && !!applications[cat.name.toLowerCase()]}
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
