import { useEffect, useState } from "react";
import { StyledHeaderDiv, StyledHeaderNav } from "../styled";
import NavBar from "./NavBar";
import SideBarButton from "./SideBarButton";
import { getCatImg } from "../helpers/CatsHelpers";
import { useNavigate } from "react-router-dom";

const initialWidth = window.innerWidth;

const Header = () => {
  const [width, setWidth] = useState(initialWidth);
  const [imgUrl, setImgUrl] = useState(null);
  const navigate = useNavigate();
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  useEffect(() => {
    const getCatURL = async () => {
      const headerImgUrl = await getCatImg("catHeader.png");
      setImgUrl(headerImgUrl);
    };
    getCatURL();
  }, []);

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <header>
      <StyledHeaderDiv>
        <img
          onClick={handleOnClick}
          className="header-img"
          src={imgUrl}
          alt="Logo"
          height="100px"
          style={{ paddingTop: "1rem", paddingLeft: "1rem", cursor: "pointer" }}
        />
        <StyledHeaderNav>
          {width > 950 ? <NavBar /> : <SideBarButton />}
        </StyledHeaderNav>
      </StyledHeaderDiv>
    </header>
  );
};

export default Header;
