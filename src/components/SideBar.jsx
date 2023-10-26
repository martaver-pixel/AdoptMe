import { useContext } from "react";
import { StytledSideBarNavLinks, StytledSideBarWrapper } from "../styled";
import AuthContext from "./context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const SideBar = ({ open }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <StytledSideBarWrapper $isOpen={open}>
      <StytledSideBarNavLinks
        to="/cats"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Cats for adoption
      </StytledSideBarNavLinks>
      {currentUser && (
        <StytledSideBarNavLinks
          to="/myapplications"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Applications
        </StytledSideBarNavLinks>
      )}
      <StytledSideBarNavLinks
        to="adopted"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Adopted
      </StytledSideBarNavLinks>
      <StytledSideBarNavLinks
        to="about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About Us
      </StytledSideBarNavLinks>
      <StytledSideBarNavLinks
        to="contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact
      </StytledSideBarNavLinks>
      {currentUser ? (
        <StytledSideBarNavLinks
          to="/login"
          onClick={() => signOut(auth)}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Log Out
        </StytledSideBarNavLinks>
      ) : (
        <StytledSideBarNavLinks
          to="login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Log In
        </StytledSideBarNavLinks>
      )}
    </StytledSideBarWrapper>
  );
};

export default SideBar;
