import { Navigation} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider2.css"; 
    


// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";

export default function Slider2() {
  return (
    <Swiper
      // install Swiper modules
      modules={[  Navigation]}
      spaceBetween={50}
      slidesPerView={5}
      // navigation

    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
     <div className="round-container">
      <SwiperSlide>
        
        <div className="round-img">
          <img
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_8mfQax8pLoaec68U4x51q.jpg?v=3897415799024594848"
            alt="Best "
          />
          <p>Best</p>
          <p>Seller</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="round-img">
            <img
              src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_PLy3UO2i9rL1DeXgJpIHR.jpg?v=9114949472138613801"
              alt="New"
            />
          <p>New</p>
          <p>Launches</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="round-img">
            <img
              src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_VihvBwLhpPXPH2GEf7h1h.jpg?v=11994404953065756962"
              alt="Limited"
            />
        
          <p>Limited</p>
          <p>Edition</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
    
          <div className="round-img">
            <img
              src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_G2mUEMoIU4Utlqe48f276.jpg?v=17881809153012839274"
              alt="boAt"
            />
        
          <p>boAt</p>
          <p>Smartwatches</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="round-img">
            <img
              src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_J45b4NgpCM1q6S1e3lk1H.jpg?v=5526341631149519643"
              alt="boAt"
            />
          
          <p>boAt</p>
          <p>Airdopes</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="round-img">
            <img src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_ULBZ384VFtEBt841vXXeC.jpg?v=9863230382099891787" alt="Meet the"/>
        
          <p>Meet the</p>
          <p>boAtheads</p>
        </div>
        
      </SwiperSlide>
      </div>
    </Swiper>

  );
}
