import Button from "@mui/material/Button";
import BeeGlobePic from "../assets/bee-globe.png";

const Hero = () => {
  return (
    <div className="flex flex-row justify-center gap-[55px] mt-[100px]">
      <div className="flex flex-col align-center gap-[35px]">
        <div className="flex gap-[25px]">
          <p className="w-[312px] text-[32px] font-bold">
            Enhance your business with AI driven IT solutions
          </p>
        </div>
        <div className="w-[160px] flex flex-col justify-center align-center">
          <Button variant="contained" className="buttonColor">
            Book a call
          </Button>
        </div>
        <div className="flex">
          <img src={BeeGlobePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
