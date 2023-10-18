import { Route, Routes } from "react-router-dom";
import Adopted from "../pages/Adopted";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { StyledMain } from "../styled";
import CatDetail from "../pages/CatDetail";
import AdoptionForm from "./AdoptionForm";
import CatsForAdoption from "../pages/CatsForAdoption";
import LogIn from "../pages/Login";
const Main = () => {
  return (
    <StyledMain>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/cats" element={<CatsForAdoption />} />
        <Route path={`/cats/:id`} element={<CatDetail />} />
        <Route path={`adoption/:id`} element={<AdoptionForm />} />
        <Route path="adopted" element={<Adopted />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h2>Error 404</h2>} />
      </Routes>
    </StyledMain>
  );
};

export default Main;
