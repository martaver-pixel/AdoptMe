import { useEffect, useState } from "react";
import { StyledHeaderDiv, StyledHeaderNav } from "../styled";
import NavBar from "./NavBar";
import SideBarButton from "./SideBarButton";
import { getCatImg } from "../helpers/CatsHelpers";

const initialWidth = window.innerWidth;

const Header = () => {
  const [width, setWidth] = useState(initialWidth);
  const [imgUrl, setImgUrl] = useState(null);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  useEffect(() => {
    const getCatURL = async () => {
      const headerImgUrl = await getCatImg("adoptmeHeader.jpg");
      setImgUrl(headerImgUrl);
    };

    getCatURL();
  }, []);

  return (
    <header>
      <StyledHeaderDiv>
        {/* trear img del header */}
        <img
          className="header-img"
          src={imgUrl}
          alt="Logo"
          height="70px"
          width="70px"
        />
        <StyledHeaderNav>
          {width > 950 ? <NavBar /> : <SideBarButton />}
        </StyledHeaderNav>
      </StyledHeaderDiv>
    </header>
  );
};

export default Header;
