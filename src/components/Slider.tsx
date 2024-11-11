import { useState } from "react";
import { Cards } from "./Cards";
import AdamHakobyanImage from "../assets/adamHakobyan.jpg";
import SamSmithImage from "../assets/samSmith.jpg";
// TODO: import arrow icons later
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: AdamHakobyanImage,
      full_name: "Sam Smith",
      position: "CEO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      url: SamSmithImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //   const goToSlide = (slideIndex: number) => {
  //     setCurrentIndex(slideIndex);
  //   };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <Cards
        avatar={slides[currentIndex].url}
        full_name={slides[currentIndex].full_name}
        position={slides[currentIndex].position}
        description={slides[currentIndex].description}
      />
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <span onClick={prevSlide}>left</span>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <span onClick={nextSlide}>right</span>
      </div>
    </div>
  );
}

export default Slider;
