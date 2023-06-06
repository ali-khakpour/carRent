import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { useCar } from "./provider/carProvider";

const Slider = () => {
  const car = useCar();
  const swiper = useSwiper()
  console.log(swiper);
  return (
    <div className="my-20 bg-[#eee] w-full h-64 border-2 relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("ali")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full "
        scrollbar={{ draggable: true }}
      >
        {car.splice(0, 5).map((item) => (
          <SwiperSlide key={item.id} className="w-[260px] h-64  flex items-center justify-center bg-information ">
            <img src={item.image} alt="ali" className="w-full h-[50%]" />
            <div className="w-full flex justify-center">
                <p>ali</p>
            </div>
            
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
