import { useForm } from "react-hook-form";
import {
  StyledCatDetailButton,
  StyledError,
  StyledForm,
  StyledFormValidationError,
  StyledFormWrapper,
} from "../styled";
import { Grid } from "@mui/material";
import { dbAuth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useState } from "react";
import LogInContext from "../components/context/LogInContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);
  const navigate = useNavigate();
  const [type, setType] = useState(false);
  const [error, setError] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

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
    console.log(type, "type");
    if (!type) {
      createUserWithEmailAndPassword(dbAuth, email, password)
        .then((data) => {
          setIsLoggedIn(true);
          navigate("/cats");
        })
        .catch((err) => {
          alert(err.message);
          setType(true);
          setError(true);
        });
    } else {
      signInWithEmailAndPassword(dbAuth, email, password)
        .then((data) => {
          {
            setIsLoggedIn(true);
            navigate("/cats");
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
    <StyledFormWrapper>
      <Grid container direction="column">
        <div>
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
        </div>

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
    </StyledFormWrapper>
  );
};

export default Home;
