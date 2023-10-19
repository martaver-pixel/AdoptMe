import { useContext } from "react";
import { StyledHeaderDiv, StyledHeaderNav, StyledNavLink } from "../styled";
import AuthContext from "./context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <header>
      <StyledHeaderDiv>
        <img
          className="header-img"
          src="../../adoptmeHeader.jpg"
          alt="Cat"
          height="70px"
          width="70px"
        />
        <StyledHeaderNav>
          <StyledNavLink
            to="/cats"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Cats for adoption
          </StyledNavLink>

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
        </StyledHeaderNav>
      </StyledHeaderDiv>
    </header>
  );
};

export default Header;
