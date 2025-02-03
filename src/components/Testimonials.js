import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Testimonials = () => {
  return (
    <section style={{ padding: "2rem", background: "#e4e4e4" }}>
      <h2>What Our Readers Say</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <p>"This blog changed my life!" - Happy Reader</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>"I learn something new every time I visit." - Loyal Visitor</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;