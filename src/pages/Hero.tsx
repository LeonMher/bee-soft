import Navigation from "./Navigation";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <div className="flex flex-col gap-[55px]">
      <Navigation />
      <div className="flex justify-center align-center">
        <div className="flex justify-end align-end flex-col gap-[55px]">
          <p className="w-[312px] text-[32px] font-bold">
            Enhance your business with AI driven IT solutions
          </p>
        </div>
      </div>
      <div className="w-[160px] flex justify-center align-center">
        <Button variant="contained">BOOK DEMO</Button>
      </div>
    </div>
  );
};

export default Hero;
