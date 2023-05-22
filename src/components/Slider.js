import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider()  {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
    }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <a
          href="https://www.boat-lifestyle.com/products/wanderer-smart-kids-smartwatch?utm_source=website&amp;utm_medium=homepagebanner&amp;utm_campaign=homepage"
          className="slide-url"
        >
          <img
            alt="Wanderer"
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/wanderer-mob_600x.png?v=1684564797"
            srcset="//cdn.shopify.com/s/files/1/0057/8938/4802/files/wanderer-mob_200x.png?v=1684564797 200w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/wanderer-mob_300x.png?v=1684564797 300w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/wanderer-mob_400x.png?v=1684564797 400w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/wanderer-mob_500x.png?v=1684564797 500w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/wanderer-mob_600x.png?v=1684564797 600w"
          />
        </a></SwiperSlide>
      <SwiperSlide> <a
          href="https://www.boat-lifestyle.com/products/aavanter-bar-stark-bluetooth-soundbar?utm_source=website&amp;utm_medium=homepagebanner&amp;utm_campaign=homepage"
          className="slide-url"
        >
          <img
            alt=""
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/stark-mob-dwdf_600x.png?v=1684495892"
            srcset="//cdn.shopify.com/s/files/1/0057/8938/4802/files/stark-mob-dwdf_200x.png?v=1684495892 200w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/stark-mob-dwdf_300x.png?v=1684495892 300w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/stark-mob-dwdf_400x.png?v=1684495892 400w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/stark-mob-dwdf_500x.png?v=1684495892 500w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/stark-mob-dwdf_600x.png?v=1684495892 600w"
          />
        </a></SwiperSlide>
      <SwiperSlide> <a
          href="https://www.boat-lifestyle.com/products/storm-connect-plus-biggest-display-smartwatch?utm_source=website&amp;utm_medium=homepagebanner&amp;utm_campaign=homepage"
          className="slide-url"
        >
          <img
            alt=""
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-connect-plus-1_597x.png?v=1684495924"
            srcset="//cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-connect-plus-1_200x.png?v=1684495924 200w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-connect-plus-1_300x.png?v=1684495924 300w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-connect-plus-1_400x.png?v=1684495924 400w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-connect-plus-1_500x.png?v=1684495924 500w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-connect-plus-1_597x.png?v=1684495924 597w"
          />
        </a></SwiperSlide>
      <SwiperSlide> <a
          href="https://www.boat-lifestyle.com/collections/daily-deals?utm_source=website&amp;utm_medium=homepagebanner&amp;utm_campaign=homepage"
          className="slide-url"
        >
          <img
            alt=""
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimesion_1ae44ba3-9aee-4c36-8834-2cda9847c9c8_600x.jpg?v=1682600882"
            srcset="//cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimesion_1ae44ba3-9aee-4c36-8834-2cda9847c9c8_200x.jpg?v=1682600882 200w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimesion_1ae44ba3-9aee-4c36-8834-2cda9847c9c8_300x.jpg?v=1682600882 300w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimesion_1ae44ba3-9aee-4c36-8834-2cda9847c9c8_400x.jpg?v=1682600882 400w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimesion_1ae44ba3-9aee-4c36-8834-2cda9847c9c8_500x.jpg?v=1682600882 500w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimesion_1ae44ba3-9aee-4c36-8834-2cda9847c9c8_600x.jpg?v=1682600882 600w"
          />
        </a></SwiperSlide>
      <SwiperSlide><a
          href="https://www.boat-lifestyle.com/products/airdopes-131?utm_source=website&amp;utm_medium=homepagebanner&amp;utm_campaign=homepage"
          className="slide-url"
        >
          <img
            alt=""
            src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_600x.jpg?v=1682347857"
            srcset="//cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_200x.jpg?v=1682347857 200w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_300x.jpg?v=1682347857 300w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_400x.jpg?v=1682347857 400w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_500x.jpg?v=1682347857 500w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_600x.jpg?v=1682347857 600w"
          />
        </a></SwiperSlide>
    </Swiper>
  );
};