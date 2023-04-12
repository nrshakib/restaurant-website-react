import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Chef from "./Components/Chef/Chef";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import SpecialMenu from "./Components/SpecialMenu/SpecialMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  );
}

export default App;
