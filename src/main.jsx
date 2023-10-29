import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./index.css";
import LogIn from "./pages/Login.jsx";
import CatsForAdoption from "./pages/CatsForAdoption.jsx";
import CatDetail from "./pages/CatDetail.jsx";
import MyApplications from "./pages/MyApplications.jsx";
import ApplicationDetail from "./pages/ApplicationDetail.jsx";
import Adopted from "./pages/Adopted.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import AddNewCats from "./pages/AddNewCats.jsx";
import Contact from "./pages/Contact.jsx";
import RouteError from "./components/RouteError.jsx";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Navigate to="/cats" replace />,
//   },
//   {
//     path: "/login",
//     element: <LogIn />,
//   },
//   {
//     path: "/cats",
//     element: <CatsForAdoption />,
//   },
//   {
//     path: `/cats/:name`,
//     element: <CatDetail />,
//   },
//   {
//     path: "myapplications",
//     element: <MyApplications />,
//   },
//   {
//     path: `/myapplication/:name`,
//     element: <ApplicationDetail />,
//   },
//   {
//     path: "adopted",
//     element: <Adopted />,
//   },
//   {
//     path: "about",
//     element: <AboutUs />,
//   },
//   {
//     path: "addnewcats",
//     element: <AddNewCats />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
//   {
//     path: "*",
//     element: <RouteError />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  //</React.StrictMode>
);
