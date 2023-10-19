import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { StyledWrapper } from "./styled";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <StyledWrapper>
        <Header />
        <Main />
        <Footer />
      </StyledWrapper>
    </AuthProvider>
  );
}

export default App;
