import { StyledError } from "../styled";

const RouteError = () => {
  return (
    <>
      <img
        src="/catError.png"
        alt="error img"
        height="150px"
        style={{ marginTop: "8rem" }}
      />
      <StyledError style={{ marginTop: "10rem" }}>
        Error 404, no cats here!
      </StyledError>
    </>
  );
};

export default RouteError;
