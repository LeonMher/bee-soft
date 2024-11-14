import { useState } from "react";

type CardProps = {
  slides: {
    avatar: string;
    full_name: string;
    position: string;
    description?: string;
  }[];
};

function Slider({ slides }: CardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="w-full flex-shrink-0" key={index}>
              <div className="w-300px">
                <img src={slide.avatar} alt="" className="w-300px" />
              </div>
              <div>
                <h3>{slide.full_name}</h3>
                <p>{slide.position}</p>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
