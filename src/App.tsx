import "./App.css";
import Hero from "./pages/Hero";
import Navigation from "./pages/Navigation";
import Slider from "./components/Slider";
import Pic from "./assets/adamHakobyan.jpg";

function App() {
  const slides = [
    {
      avatar: Pic,
      full_name: "Adam Hakobyan",
      position: "Frontend Developer",
      description: "I'm a frontend developer",
    },
    {
      avatar: Pic,
      full_name: "Sam Smith",
      position: "Backend Developer",
      description: "I'm a backend engineer",
    },
  ];
  return (
    <div>
      <Navigation />
      <Hero />
      <Slider slides={slides} />
    </div>
  );
}

export default App;
