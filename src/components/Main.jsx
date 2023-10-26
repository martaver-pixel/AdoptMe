import { Navigate, Route, Routes } from "react-router-dom";
import Adopted from "../pages/Adopted";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { StyledMain } from "../styled";
import CatDetail from "../pages/CatDetail";
import AdoptionForm from "./AdoptionForm";
import CatsForAdoption from "../pages/CatsForAdoption";
import LogIn from "../pages/Login";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import MyApplications from "../pages/MyApplications";
const Main = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <StyledMain>
      <Routes>
        <Route path="/" element={<Navigate to="/cats" replace />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cats" element={<CatsForAdoption />} />
        <Route path={`AdoptMe/cats/:id`} element={<CatDetail />} />
        <Route path={`adoption/:id`} element={<AdoptionForm />} />
        <Route path={"myapplications"} element={<MyApplications />} />
        <Route path="adopted" element={<Adopted />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h2>Error 404</h2>} />
      </Routes>
    </StyledMain>
  );
};

export default Main;
