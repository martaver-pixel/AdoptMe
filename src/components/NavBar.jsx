import { useContext } from "react";
import { StyledNavLink } from "../styled";
import AuthContext from "./context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <StyledNavLink
        to="/cats"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Cats for adoption
      </StyledNavLink>
      {currentUser && (
        <StyledNavLink
          to="/myapplications"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Applications
        </StyledNavLink>
      )}
      <StyledNavLink
        to="adopted"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Adopted
      </StyledNavLink>
      <StyledNavLink
        to="about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About Us
      </StyledNavLink>
      <StyledNavLink
        to="contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact
      </StyledNavLink>
      {currentUser ? (
        <StyledNavLink
          to="/login"
          onClick={() => signOut(auth)}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Log Out
        </StyledNavLink>
      ) : (
        <StyledNavLink
          to="login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Log In
        </StyledNavLink>
      )}
    </>
  );
};

export default NavBar;
