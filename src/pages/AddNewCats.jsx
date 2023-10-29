import { useState } from "react";
import AddNewCatsHelper from "../helpers/AddNewCatsHelper";
import {
  StyledCatDetailButton,
  StyledCloseButton,
  StyledError,
  StyledForm,
  StyledFormValidationError,
  StyledSuccess,
} from "../styled";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { reload } from "firebase/auth";

const AddNewCats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      color: "",
      description: "",
      location: "",
      name: "",
      sex: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      console.log(data);
      await AddNewCatsHelper(data);
      reset();
      setSuccess(true);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnClick = () => {
    window.location.reload();
  };
  if (error)
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ marginTop: "3rem" }}
      >
        <img src="/catError.png" alt="error" />
        <StyledError>
          An error occurred while adding a new cat. Please try again later.
        </StyledError>
        <StyledCatDetailButton onClick={handleOnClick}>
          Try Again
        </StyledCatDetailButton>
      </Grid>
    );

  if (success)
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ marginTop: "3rem" }}
      >
        <StyledSuccess>Cat added succesfuly!</StyledSuccess>
        <img src="/catAdded.png" alt="Added" />
        <StyledCatDetailButton onClick={handleOnClick}>
          Add another cat!
        </StyledCatDetailButton>
      </Grid>
    );

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container direction="column" spacing={2}>
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
                <>Cat name must contain only letters and blank spaces</>
              )}
            </StyledFormValidationError>
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              {...register("color", {
                required: "Color is required",
                validate: {
                  matchPattern: (v) => /^[A-Za-z\s]*$/.test(v),
                },
              })}
              placeholder="Black"
            />
            <StyledFormValidationError>
              {errors.name?.message}
              {errors.name?.type === "matchPattern" && (
                <>Color must contain only letters and blank spaces</>
              )}
            </StyledFormValidationError>
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="This cat is.."
            />
            <StyledFormValidationError>
              {<>{errors.name?.message}</>}
            </StyledFormValidationError>
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="sex">Sex:</label>
            <input
              type="text"
              {...register("sex", {
                required: "Sex is required",
                validate: {
                  matchPattern: (v) => /^[A-Za-z\s]*$/.test(v),
                },
              })}
              placeholder="Male.."
            />
            <StyledFormValidationError>
              {errors.name?.message}
              {errors.name?.type === "matchPattern" && (
                <>Sex must contain only be male or female</>
              )}
            </StyledFormValidationError>
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              {...register("location", {
                required: "Location is required",
                validate: {
                  matchPattern: (v) => /^[A-Za-z\s]*$/.test(v),
                },
              })}
              placeholder="Madrid..."
            />
            <StyledFormValidationError>
              {errors.name?.message}
              {errors.name?.type === "matchPattern" && (
                <>Location must contain only letters and blank spaces</>
              )}
            </StyledFormValidationError>
          </Grid>
        </Grid>
      </Grid>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container item xs={12}>
          <input type="submit" value="Add new cat! &#128571;" />
        </Grid>
      )}
    </StyledForm>
  );
};

export default AddNewCats;
