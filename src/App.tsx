import "./App.css";
import Hero from "./pages/Hero";
import Navigation from "./pages/Navigation";
import Slider from "./components/Slider";
import Pic from "./assets/adamHakobyan.jpg";
import SamPic from "./assets/samSmith.jpg";
import ChrisWhitePic from "./assets/chrisWhite.jpg";

function App() {
  const slides = [
    {
      avatar: Pic,
      full_name: "Boris Tarminyan",
      position: "Backend Developer",
      description:
        "Boris is an experienced Back End Developer with a strong background in building robust server-side applications. With over 8 years of experience",
    },
    {
      avatar: SamPic,
      full_name: "Sam Smith",
      position: "Frontend developer",
      description:
        "Sam is a skilled Front End Developer. Sam excels at crafting seamless user interfaces and optimizing performance to ensure smooth, responsive experiences across devices and browsers",
    },
    {
      avatar: ChrisWhitePic,
      full_name: "Chris White",
      position: "UI/UX Designer",
      description:
        "Chris is a skilled UI/UX Designer with over 6 years of experience creating intuitive, user-centered designs. He excels in research and applying design principles to enhance usability and user interfaces.",
    },
    {
      avatar: ChrisWhitePic,
      full_name: "Chris White",
      position: "UI/UX Designer",
      description:
        "Chris is a skilled UI/UX Designer with over 6 years of experience creating intuitive, user-centered designs. He excels in research and applying design principles to enhance usability and user interfaces.",
    },
    {
      avatar: ChrisWhitePic,
      full_name: "Chris White",
      position: "UI/UX Designer",
      description:
        "Chris is a skilled UI/UX Designer with over 6 years of experience creating intuitive, user-centered designs. He excels in research and applying design principles to enhance usability and user interfaces.",
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
