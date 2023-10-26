import { Card, Grid } from "@mui/material";
import { StyledCards, StyledHomeTitle } from "../styled";
import { useContext } from "react";
import Loading from "../components/Loading";
import ApplicationCard from "../components/ApplicationCard";
import ApplicationContext from "../components/context/ApplicationsContext";
const MyApplications = () => {
  const { applications } = useContext(ApplicationContext);
  if (!applications) return <Loading />;
  const applicationsKeys = Object.keys(applications);

  return (
    <Grid container direction="column" justifyContent="left">
      <StyledHomeTitle>My Applications:</StyledHomeTitle>
      <StyledCards>
        {applicationsKeys.map((catId) => {
          const app = applications[catId];
          return (
            <ApplicationCard
              key={app.cat.name}
              title={app.cat.name}
              img={app.cat.imgURL}
              user={app.application.applicationUser}
              date={app.application.dateOfApplication.seconds * 1000}
            />
          );
        })}
      </StyledCards>
    </Grid>
  );
};

export default MyApplications;
