import { useEffect } from "react";
import { createPortal } from "react-dom";
import { StyledCatDetailButton, StyledCloseButton } from "../styled";

const ModalStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  width: "80%",
  margin: "10vh auto 10vh auto",
  transform: "translate(-50, -50%)",
  backgroundColor: "#fff",
  padding: "25px",
  overflow: "auto",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 10px 20px 0 #697489",
};
const OverlayStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  backgroundColor: "rgba(37,41,47,30%)",
  zIndex: 10000,
};

const Modal = ({ open, children, onClose }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (open) {
      body.classList.add("dialog-open");
    } else {
      body.classList.remove("dialog-open");
    }
  }, [open]);

  if (!open) return null;
  return createPortal(
    <>
      <div style={OverlayStyle}>
        <div style={ModalStyle}>
          <StyledCloseButton onClick={onClose}> X </StyledCloseButton>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
