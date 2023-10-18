import { useContext } from "react";
import { StyledHeaderDiv, StyledHeaderNav, StyledNavLink } from "../styled";
import LogInContext from "./context/LogInContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);
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
          {isLoggedIn ? (
            <StyledNavLink
              to="/login"
              onClick={() => setIsLoggedIn(false)}
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
