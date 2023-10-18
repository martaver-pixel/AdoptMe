/* eslint-disable react/prop-types */
import { StyledCard, Styledh4 } from "../styled";
const Card = ({ id, title, location, subtitle, handleOnClick, img }) => {
  return (
    <>
      <StyledCard onClick={() => handleOnClick(id)}>
        <img src={img} alt={title} height="300px" />
        <h3>{title}</h3>
        <h4>{subtitle}</h4>

        <Styledh4>&#128205;{location}</Styledh4>
      </StyledCard>
    </>
  );
};

export default Card;
