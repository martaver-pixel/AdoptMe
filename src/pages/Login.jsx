import { useForm } from "react-hook-form";
import {
  StyledCatDetailButton,
  StyledError,
  StyledForm,
  StyledFormValidationError,
  StyledFormWrapper,
} from "../styled";
import { Grid } from "@mui/material";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../components/context/AuthContext";

const LogIn = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [type, setType] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    if (!type) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          navigate(-1);
        })
        .catch((err) => {
          alert(err.message);
          setType(true);
          setError(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          {
            navigate(-1);
          }
        })
        .catch((err) => {
          alert(err.message);
          reset((formValues) => ({
            ...formValues,
            password: "",
          }));
        });
    }
  };

  return (
    <Grid container direction="column">
      <Grid container item>
        <StyledCatDetailButton
          onClick={() => {
            setType(false);
          }}
        >
          Sign Up
        </StyledCatDetailButton>
        <StyledCatDetailButton
          onClick={() => {
            setType(true);
          }}
        >
          Log In
        </StyledCatDetailButton>
      </Grid>

      <h1>{type ? "Log In" : "Sign Up"}</h1>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            validate: {
              matchPattern: (v) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
            },
          })}
          placeholder="Username..."
        />
        <StyledFormValidationError>
          {errors.email?.message}
          {errors.email?.type === "matchPattern" && (
            <>Please enter a valid email</>
          )}
        </StyledFormValidationError>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            validate: {
              matchPattern: (v) => /^.{6,}$/.test(v),
            },
          })}
          placeholder="Password.."
        />
        <StyledFormValidationError>
          {errors.password?.message}
          {errors.password?.type === "matchPattern" && (
            <>Password must have at least 6 characters</>
          )}
        </StyledFormValidationError>
        <input type="submit" value={type ? "Log In" : "Sign Up"} />
      </StyledForm>
    </Grid>
  );
};

export default LogIn;
