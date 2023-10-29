import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const StyledHeaderDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 4.4rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  background: #f0e4d9ce;
  border-bottom: thin solid #f0d6bd;
  border-width: 5px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #eeab6c;
  &:hover,
  &.active {
    color: #ea7405;
  }
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  font-size: 1.5rem;
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  margin: 3rem 5rem;
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1e6dc;
  border-top: thin solid #f0d6bd;
  border-width: 5px;
  margin-bottom: 0;
`;

export const StyledHomeTitle = styled.h2`
  text-align: left;
  font-size: 3rem;
  color: #ea7405;
`;
export const StyledCards = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem;
  justify-items: center;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledCard = styled.div`
  padding: 24px;
  display: grid;
  background: #f1e6dc;
  border: thin solid #f0d6bd;
  justify-content: center;
  margin-bottom: 36px;
  width: 300px;
  cursor: pointer;

  &:hover {
    border-color: #ea7405;
    box-shadow: 0 0 3px #ea7405;
  }

  & > * {
    margin: 5px;
  }
`;

export const Styledh4 = styled.h4`
  text-align: right;
`;

export const StyledCatDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: ${(props) => (props.isOpen ? "hidden" : "visible")};
`;

export const StyledCatDetailButton = styled.button`
  position: relative;
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: ${(props) => (props.$important ? "#ea8d37" : "#e9b27f")};
  margin: 5px;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  line-height: 1;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  -webkit-user-select: none;
  will-change: box-shadow, transform;
  font-size: 18px;
  font-weight: bolder;
  :focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const StyledCloseButton = styled(StyledCatDetailButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledCatCard = styled.div`
  text-align: center;
  margin-top: 30px;
  width: 30rem;
  padding: 30px;
  background-color: #f1e6dc;
  & h2 {
    color: #ea7405;
  }
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const StyledForm = styled.form`
  width: 70%;
  margin: 30px auto;
  input[type="text"],
  input[type="email"],
  input[type="password"],
  textarea {
    border: thin solid #e9b27f;
    padding: 0.75rem;
    margin-bottom: 1rem;
    outline: none;
    display: block;
    width: 80%;
    font-size: 1rem;
    line-height: 1;
    background-color: transparent;
  }

  textarea {
    font-family: inherit;
    resize: none;
  }

  form {
    margin-bottom: 1rem;
  }

  label {
    padding: 0.5rem 0;
    margin: 0 0 0.5rem 0;
    display: inline-block;
    color: #444;
    font-weight: bold;
    line-height: 1;
    cursor: pointer;
  }

  input[type="submit"] {
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #ea8d37;
    margin: 5px;
    cursor: pointer;
    display: inline-flex;
    height: 48px;
    line-height: 1;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    will-change: box-shadow, transform;
    font-size: 18px;
    font-weight: bolder;
    :focus {
      box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    }

    &:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: #d6d6e7 0 3px 7px inset;
      transform: translateY(2px);
    }
  }
`;

export const StyledFormValidationError = styled.p`
  background-color: #dc3545;
  color: #fff;
  width: fit-content;
  text-align: center;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const StyledError = styled.h1`
  background-color: #dc3545;
  color: #fff;
  border-radius: 20px;
  padding: 10px;
  height: fit-content;
`;
export const StyledSuccess = styled.h1`
  background-color: #2fc047;
  color: #fff;
  border-radius: 20px;
  padding: 10px;
  height: fit-content;
`;

export const StytledSideBarWrapper = styled.div`
  position: fixed;
  top: 4.4rem;
  right: 0;
  bottom: 5.3rem;
  background-color: #f0d6bdf0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  display: inline-flex;
  overflow: hidden;
  display: ${(props) => (props.$isOpen ? "inline-flex" : "none")};
  width: ${(props) => (props.$isOpen ? "50%" : "0")};
`;

export const StytledSideBarNavLinks = styled(NavLink)`
  text-decoration: none;
  color: #eeab6c;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &.active {
    color: #fff;
    background-color: #eeab6c;
  }
`;
