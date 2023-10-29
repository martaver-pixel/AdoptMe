import { Navigate, Route, Routes } from "react-router-dom";
import Adopted from "../pages/Adopted";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { StyledMain } from "../styled";
import CatDetail from "../pages/CatDetail";
import LogIn from "../pages/Login";
import MyApplications from "../pages/MyApplications";
import CatsForAdoption from "../pages/CatsForAdoption";
import AddNewCats from "../pages/AddNewCats";
import RouteError from "./RouteError";
import ApplicationDetail from "../pages/ApplicationDetail";
const Main = () => {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" element={<Navigate to="/cats" replace />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cats" element={<CatsForAdoption />} />
        <Route path={`/cats/:name`} element={<CatDetail />} />
        <Route path="myapplications" element={<MyApplications />} />
        <Route path={`/myapplication/:name`} element={<ApplicationDetail />} />
        <Route path="adopted" element={<Adopted />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="addnewcats" element={<AddNewCats />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<RouteError />} />
      </Routes>
    </StyledMain>
  );
};

export default Main;
