import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Awards from "./Components/Awards/Awards";
import Chef from "./Components/Chef/Chef";
import Gallery from "./Components/Gallery/Gallery";
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
      <Awards />
      <Gallery />
    </div>
  );
}

export default App;
