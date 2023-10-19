import { useParams } from "react-router-dom";
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
import { postAdoptionForm } from "../helpers/AdoptionHelper";
import AuthContext from "./context/AuthContext";

const AdoptionForm = () => {
  const { currentUser } = useContext(AuthContext);
  const [hasOtherPet, setHasOtherPet] = useState(false);
  const { id } = useParams();
  const [hasOwnedBefore, setHasOwnedBefore] = useState(false);
  const [hasMorePets, setHasMorePets] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    unregister,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      experience: "",
      pets: [],
      otherPets: null,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      const dataWithCatId = {
        ...data,
        catId: id,
        applicationUser: currentUser.email,
      };
      await postAdoptionForm(dataWithCatId);
      reset();
      setSuccess(true);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const applicationUser = currentUser.email;

  console.log(applicationUser);
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
          <Grid container item spacing={1} xs={12}>
            <Grid item xs={6}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  validate: {
                    matchPattern: (v) => /^[A-Za-z\s]*$/.test(v),
                  },
                })}
                placeholder="Luis Miguel"
              />
              <StyledFormValidationError>
                {errors.name?.message}
                {errors.name?.type === "matchPattern" && (
                  <>Username must contain only letters and blank spaces</>
                )}
              </StyledFormValidationError>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    matchPattern: (v) =>
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                        v
                      ),
                  },
                })}
                placeholder="luismiguel@acb.com"
              />

              <StyledFormValidationError>
                {errors.email?.message}
                {errors.email?.type === "matchPattern" && (
                  <>Please enter a valid email</>
                )}
              </StyledFormValidationError>
            </Grid>
          </Grid>

          <Grid container item spacing={1} xs={12} direction="column">
            <h3>Tell us about you:</h3>
            <h4>Have you ever owned a cat before? </h4>
            <Grid container item spacing={2}>
              <Grid item>
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
