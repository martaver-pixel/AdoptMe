import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/AdoptMe" homepage="/AdoptMe">
    <App />
  </BrowserRouter>
  //</React.StrictMode>
);