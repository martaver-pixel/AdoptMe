import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import {
  StyledError,
  StyledForm,
  StyledFormValidationError,
  StyledSuccess,
} from "../styled";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import Grid from "@mui/material/Grid";
import { myApplication, postAdoptionForm } from "../helpers/AdoptionHelper";
import AuthContext from "./context/AuthContext";

const AdoptionForm = ({ catName }) => {
  const { currentUser } = useContext(AuthContext);
  const [hasOtherPet, setHasOtherPet] = useState(false);

  const [hasOwnedBefore, setHasOwnedBefore] = useState(false);
  const [hasMorePets, setHasMorePets] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    unregister,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      experience: "",
      pets: [],
      otherPets: null,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const date = new Date();
    try {
      const dataWithName = {
        ...data,
        catName: name,
        applicationUser: currentUser.email,
        dateOfApplication: date,
      };
      await postAdoptionForm(dataWithName);
      await myApplication(dataWithName);
      reset();
      setSuccess(true);
      navigate(`/myapplication/${name}`);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHasMorePets = (newValue) => {
    setHasMorePets(newValue);
    if (!newValue) {
      unregister("pets");
      unregister("otherPets");
    }
  };
  if (error)
    return (
      <Grid alignItems="center" justifyContent="center">
        <StyledError>
          An error occurred while submitting your application. Please try again
          later.
        </StyledError>
      </Grid>
    );
  if (success)
    return (
      <Grid alignItems="center" justifyContent="center">
        <StyledSuccess>Your application has been successful</StyledSuccess>
      </Grid>
    );

  return (
    <Grid alignItems="center" justifyContent="center">
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid container item spacing={1} xs={12} direction="column">
            <h3>Tell us about you:</h3>
            <h4>Have you ever owned a cat before? </h4>
            <Grid container item>
              <Grid item style={{ paddingLeft: "0px" }}>
                <label htmlFor="yesHasOwned">
                  <input
                    type="radio"
                    value="Yes"
                    id="yesHasOwned"
                    {...register("hadOwn")}
                    onChange={() => setHasOwnedBefore(true)}
                  />
                  Yes!
                </label>
              </Grid>
              <Grid item>
                <label htmlFor="noHasOwned">
                  <input
                    type="radio"
                    value="No"
                    id="noHasOwned"
                    {...register("hadOwn")}
                    onChange={() => setHasOwnedBefore(false)}
                  />
                  No but looking forward to!
                </label>
              </Grid>
            </Grid>
            {hasOwnedBefore && (
              <>
                <h4>Tell us about your previous cat ownership experience:</h4>
                <textarea
                  type="text"
                  {...register("experience", {
                    required: "This field is required",
                    maxLength: {
                      value: 250,
                      message:
                        "Please make sure it is fewer than 250 characters",
                    },
                  })}
                  cols="30"
                  rows="5"
                />
                <StyledFormValidationError>
                  {errors.message?.message}
                </StyledFormValidationError>
              </>
            )}
          </Grid>
          <Grid container item spacing={1} xs={12}>
            <h4>Do you currently have any other pets at home? </h4>
            <Grid container item spacing={2}>
              <Grid item>
                <label htmlFor="yesHasMore">
                  <input
                    type="radio"
                    name="hasMorePets"
                    value="Yes"
                    id="yesHasMore"
                    onChange={() => handleHasMorePets(true)}
                  />
                  Yes!
                </label>
              </Grid>
              <Grid item>
                <label htmlFor="noHasMore">
                  <input
                    type="radio"
                    name="hasMorePets"
                    value="No"
                    id="noHasMore"
                    onChange={() => handleHasMorePets(false)}
                  />
                  No
                </label>
              </Grid>
            </Grid>
          </Grid>

          {hasMorePets && (
            <>
              <Grid item>
                <h4>Other pets:</h4>
                <input type="checkbox" {...register("pets")} value="dog" />
                <label htmlFor="dog">Dog</label>
                <br />
                <input
                  type="checkbox"
                  {...register("pets")}
                  id="cat"
                  value="cat"
                />
                <label htmlFor="cat">Cat</label>
                <br />
                <input
                  type="checkbox"
                  {...register("pets")}
                  id="fish"
                  value="fish"
                />
                <label htmlFor="fish">Fish</label>
                <br />
                <input
                  type="checkbox"
                  {...register("pets")}
                  id="bird"
                  value="bird"
                />
                <label htmlFor="bird">Bird</label>
                <br />
                <input
                  type="checkbox"
                  {...register("pets")}
                  id="turtle"
                  value="turtle"
                />
                <label htmlFor="turtle">Turtle</label>
                <br />
                <input
                  type="checkbox"
                  checked={hasOtherPet}
                  id="other"
                  value="other"
                  onChange={() => setHasOtherPet(!hasOtherPet)}
                />
                <label htmlFor="other">Other...</label>
                {hasOtherPet && (
                  <input
                    type="text"
                    {...register("otherPets")}
                    id="other"
                    aria-label="Other pet"
                  />
                )}
              </Grid>
            </>
          )}
          <br />
          {isLoading ? (
            <Loading />
          ) : (
            <Grid container item xs={12}>
              <input type="submit" value="Apply! &#128571;" />
            </Grid>
          )}
        </Grid>
      </StyledForm>
    </Grid>
  );
};

export default AdoptionForm;
