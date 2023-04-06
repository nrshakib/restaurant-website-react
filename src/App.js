import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import SpecialMenu from "./Components/SpecialMenu/SpecialMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu/>
    </div>
  );
}

export default App;
