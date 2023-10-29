/* eslint-disable react/prop-types */
import { memo } from "react";
import { StyledCard, Styledh4 } from "../styled";
import { useNavigate } from "react-router-dom";

const Card = memo(
  ({ id, title, location, subtitle, handleOnClick, img, isApplied }) => {
    const navigate = useNavigate();
    const handleOnClickAlreadyApplied = () => {
      navigate(`/myapplication/${title}`);
    };
    if (isApplied) {
      return (
        <>
          <StyledCard onClick={handleOnClickAlreadyApplied}>
            <img
              src={img || "/placeholderCat.webp"}
              alt={title}
              height="300px"
            />

            <h3>{title}</h3>
            <h4>You have already applied to adopt this cat!</h4>
            <Styledh4>&#128205;{location}</Styledh4>
          </StyledCard>
        </>
      );
    } else {
      return (
        <>
          <StyledCard onClick={() => handleOnClick(id)}>
            <img
              src={img || "/placeholderCat.webp"}
              alt={title}
              height="300px"
            />
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <Styledh4>&#128205;{location}</Styledh4>
          </StyledCard>
        </>
      );
    }
  }
);

Card.displayName = "Card";

export default Card;
