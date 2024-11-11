import "./App.css";
import Hero from "./pages/Hero";
import Navigation from "./pages/Navigation";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Slider />
    </div>
  );
}

export default App;
