import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { StyledWrapper } from "./styled";
import { AuthProvider } from "./components/context/AuthContext";
import { ApplicationProvider } from "./components/context/ApplicationsContext";

function App() {
  return (
    <AuthProvider>
      <ApplicationProvider>
        <StyledWrapper>
          <Header />
          <Main />
          <Footer />
        </StyledWrapper>
      </ApplicationProvider>
    </AuthProvider>
  );
}

export default App;
