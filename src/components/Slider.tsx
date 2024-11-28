import { Cards } from "./Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type CardProps = {
  slides: {
    avatar: string;
    full_name: string;
    position: string;
    description?: string;
  }[];
};

function Slider({ slides }: CardProps) {
  return (
    <div className="relative w-full max-w-lg mx-auto  p-4">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((slide, index) => (
              <div className="w-full flex-shrink-0 " key={index}>
                <SwiperSlide>
                  <Cards {...slide} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
