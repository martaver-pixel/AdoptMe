/* eslint-disable react/prop-types */
import { StyledCard } from "../styled";
const ApplicationCard = ({ title, img, date, handleOnClick }) => {
  const dateOfApp = new Date(date).toDateString();
  return (
    <>
      <StyledCard onClick={handleOnClick}>
        <h3>{title}</h3>
        <img src={img} alt="cat" height="200px" />
        <h3>Applied on: {dateOfApp} </h3>
      </StyledCard>
    </>
  );
};

export default ApplicationCard;
