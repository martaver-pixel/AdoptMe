import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { StyledWrapper } from "./styled";
import { LogInProvider } from "./components/context/LogInContext";

function App() {
  return (
    <LogInProvider>
      <StyledWrapper>
        <Header />
        <Main />
        <Footer />
      </StyledWrapper>
    </LogInProvider>
  );
}

export default App;
