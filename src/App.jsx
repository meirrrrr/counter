import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import PraySection from "./components/prayTime/PraySection";
import headerLogo from "./header-logo.svg";
import "./index.css";

function App() {
  return (
    <>
      <Header link={headerLogo} />
      <Main />
      <Button />
    </>
  );
}

export default App;
