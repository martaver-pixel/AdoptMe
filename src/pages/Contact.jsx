import { useState } from "react";
import { postContactForm } from "../helpers/ContactHelper";
import {
  StyledForm,
  StyledFormValidationError,
  StyledFormWrapper,
} from "../styled";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    setIsLoading(true);
    try {
      await postContactForm(name, email, subject, message);
      reset();
      alert("Form submitted succesfully, we'll be in touch!");
    } catch (err) {
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            validate: {
              matchPattern: (v) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
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
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          {...register("subject", { required: "Subject is required" })}
          placeholder="Subject"
        />
        <StyledFormValidationError>
          {errors.subject?.message}
        </StyledFormValidationError>
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          {...register("message", {
            required: "Message is required",
            maxLength: {
              value: 250,
              message: "Please make sure it is fewer than 250 characters",
            },
          })}
          cols="30"
          rows="10"
          placeholder="I want a cat!"
        />
        <StyledFormValidationError>
          {errors.message?.message}
        </StyledFormValidationError>
        {isLoading ? <Loading /> : <input type="submit" value="Send Form" />}
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Contact;
