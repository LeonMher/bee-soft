import "./App.css";
import Hero from "./pages/Hero";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <div className="p-4 flex flex-col gap-[30px]">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
