import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation"; // ✅ for arrow styling

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { heroSlides } from "../data/heroSliderData";

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]} // ✅ include arrows
      effect="fade"
      autoplay={{ delay: 3500 }}
      navigation={true} // ✅ enable arrows
      loop={true}
      className="w-full h-[90vh]"
    >
      {heroSlides.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="relative w-full h-full object-cover">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30 z-0" />

            <div className="absolute left-12 top-1/3 text-white z-10 max-w-xl">
              <h1 className="text-9xl font-bold mb-4">{movie.title}</h1>
              <p className="text-2xl mb-4">{movie.description}</p>
              <div className="flex gap-4">
                <button className="bg-red-600 px-6 py-2 rounded text-white">
                  Watch Now
                </button>
                <button className="bg-white px-6 py-2 rounded text-black">
                  Watch Later
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
