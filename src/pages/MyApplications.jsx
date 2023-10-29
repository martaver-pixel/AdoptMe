import { Grid } from "@mui/material";
import { StyledCards, StyledError, StyledHomeTitle } from "../styled";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import ApplicationCard from "../components/ApplicationCard";
import ApplicationContext from "../components/context/ApplicationsContext";
import { useNavigate } from "react-router-dom";
import { getApplicationsByUser } from "../helpers/ApplicationsHelpers";
import AuthContext from "../components/context/AuthContext";
import useMyApplications from "../hooks/useMyApplications";
import RouteError from "../components/RouteError";
const MyApplications = () => {
  const navigate = useNavigate();
  const { applications, isLoading } = useMyApplications();
  if (isLoading) return <Loading />;
  const applicationsKeys = Object.keys(applications);
  const handleOnClick = (name) => {
    navigate(`/myapplication/${name}`);
  };
  if (Object.keys(applications).length === 0)
    return (
      <>
        <Grid container direction="row" justifyContent="left">
          <StyledHomeTitle>My Applications:</StyledHomeTitle>
          <Grid container item alignItems="center">
            <img
              src="../noApplicationsYet.png"
              alt="No applications"
              width="400px"
            />
            <StyledError>No applications yet!</StyledError>
          </Grid>
        </Grid>
      </>
    );

  return (
    <Grid container direction="column" justifyContent="left">
      <StyledHomeTitle>My Applications:</StyledHomeTitle>
      <StyledCards>
        {applicationsKeys.map((catName) => {
          const app = applications[catName];
          return (
            <ApplicationCard
              handleOnClick={() => handleOnClick(app.cat.name)}
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
