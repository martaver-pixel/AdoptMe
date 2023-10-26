import { Card, Grid } from "@mui/material";
import { StyledCards, StyledHomeTitle } from "../styled";
import { useContext, useEffect, useState } from "react";
import { getApplicationsByUser } from "../helpers/ApplicationsHelpers";
import AuthContext from "../components/context/AuthContext";
import Loading from "../components/Loading";
import ApplicationCard from "../components/ApplicationCard";
import ApplicationContext from "../components/context/ApplicationsContext";
const MyApplications = () => {
  // const { currentUser } = useContext(AuthContext);
  const { applications } = useContext(ApplicationContext);
  // const [applications, setApplications] = useState(null);

  // useEffect(() => {
  //   const fetchData = async (user) => {
  //     try {
  //       const res = await getApplicationsByUser(user.email);

  //       setApplications(res);
  //     } catch (err) {
  //       console.log("Error in fetchData:", err);
  //     }
  //   };
  //   if (currentUser) fetchData(currentUser);
  // }, [currentUser]);

  return (
    <Grid container direction="column" justifyContent="left">
      <StyledHomeTitle>My Applications:</StyledHomeTitle>
      <StyledCards>
        {applications ? (
          applications.map((app) => (
            <ApplicationCard
              key={app.cat.name}
              title={app.cat.name}
              img={app.cat.imgURL}
              user={app.application.applicationUser}
              date={app.application.dateOfApplication.seconds * 1000}
            />
          ))
        ) : (
          <Loading />
        )}
      </StyledCards>
    </Grid>
  );
};

export default MyApplications;
