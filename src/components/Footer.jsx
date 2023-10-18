import { StyledFooter } from "../styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2023 AdoptMe. All Rights Reserved.</p>
      <section>
        <img src="./icons8-facebook-nuevo.svg" alt="" />
        <img src="./icons8-instagram.svg" alt="" />
        <img src="./icons8-twitter.svg" alt="" />
      </section>
      <a
        style={{ display: "none" }}
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com/icon/118490/facebook-nuevo"
      ></a>
      <a
        style={{ display: "none" }}
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com"
      ></a>
      <a
        target="_blank"
        style={{ display: "none" }}
        rel="noreferrer"
        href="https://icons8.com/icon/84884/instagram"
      ></a>
      <a
        target="_blank"
        style={{ display: "none" }}
        rel="noreferrer"
        href="https://icons8.com"
      ></a>
      <a
        target="_blank"
        style={{ display: "none" }}
        rel="noreferrer"
        href="https://icons8.com/icon/102907/twitter"
      ></a>
      <a
        target="_blank"
        style={{ display: "none" }}
        rel="noreferrer"
        href="https://icons8.com"
      ></a>
    </StyledFooter>
  );
};

export default Footer;
