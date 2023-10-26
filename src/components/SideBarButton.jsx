import { Grid } from "@mui/material";
import SideBar from "./SideBar";
import { useEffect, useRef, useState } from "react";

const SideBarButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <Grid container justifyContent="right">
        <div ref={menuRef}>
          <button
            className={`hamburger hamburger--spin ${isOpen ? "is-active" : ""}`}
            onClick={handleClick}
            open={isOpen}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <SideBar open={isOpen} />
        </div>
      </Grid>
    </>
  );
};

export default SideBarButton;
