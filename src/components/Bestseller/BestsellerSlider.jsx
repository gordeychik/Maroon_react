import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import axios from "axios";
import styles from "./Bestseller.module.scss";
import { PrevArrow } from "../../assets/icons/PrevArrow";
import { NextArrow } from "../../assets/icons/NextArrow";

export const BestsellerSlider = () => {
  const backgroundImageStyle = (image) => {
    return { backgroundImage: `url(/src/assets/images/${image}.png)` };
  };

  const [list, setList] = useState([]);

  const getBestsellers = async () => {
    try {
      const { data } = await axios.get(
        "https://32dd338f7fb40b9b.mokky.dev/bestseller"
      );
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBestsellers();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          580: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {list.map((elem) => (
          <SwiperSlide key={elem.id}>
            <div
              className={styles.card}
              style={backgroundImageStyle(elem.image)}
            >
              <h4>{elem.title}</h4>
              <p>{elem.name}</p>
              <Link to={`/product/${elem.id}`}>Подробнее</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.slider__arrows}>
        <div className="swiper-button-prev">
          <PrevArrow />
        </div>
        <div className="swiper-button-next">
          <NextArrow />
        </div>
      </div>
    </>
  );
};
