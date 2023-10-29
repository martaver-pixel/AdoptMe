/* eslint-disable react/prop-types */
import { StyledCard } from "../styled";
const ApplicationCard = ({ title, img, date, handleOnClick }) => {
  const dateOfApp = new Date(date).toDateString();
  return (
    <>
      <StyledCard onClick={handleOnClick}>
        <img src={img} alt="cat" height="300px" />
        <h3>{title}</h3>
        <h3>Applied on: {dateOfApp} </h3>
      </StyledCard>
    </>
  );
};

export default ApplicationCard;
