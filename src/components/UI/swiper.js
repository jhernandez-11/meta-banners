import React from "react";
import styles from './swiper.module.scss'
import { Swiper } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);

const swiperContainer = (props) => {
  return (
    <React.Fragment>
      <Swiper
        autoplay={true}
        className={styles.Swiper}
        direction="horizontal"
        grabCursor={true}
        mousewheel={{ invert: true, forceToAxis: true }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: false, type: "progressbar" }}
      >
        { props.children }
      </Swiper>
    </React.Fragment>
  );
};

export default swiperContainer;