/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StyledCard, Styledh4 } from "../styled";
import ApplicationContext from "./context/ApplicationsContext";

const Card = ({ id, title, location, subtitle, handleOnClick, img }) => {
  const { applications } = useContext(ApplicationContext);
  console.log(applications, "fkjfe");
  return (
    <>
      {applications.application.catId === id ? (
        <h2>Hola</h2>
      ) : (
        <StyledCard onClick={() => handleOnClick(id)}>
          <img src={img} alt={title} height="300px" />
          <h3>{title}</h3>
          <h4>{subtitle}</h4>

          <Styledh4>&#128205;{location}</Styledh4>
        </StyledCard>
      )}
    </>
  );
};

export default Card;
