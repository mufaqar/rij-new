import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./UI/container";

import { storyblokEditable } from '@storyblok/react'

const Slider = ({blok}) => {
console.log("🚀 ~ file: Slider.js:9 ~ Slider ~ blok:", blok)

  return (
    <section {...storyblokEditable(blok)} >
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blok.slider?.map((s, id) => {
          const gradient = `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),`;
          const imageUrl = `url(${s.feature_image.filename})`;
          const combinedStyle = {
            backgroundImage: `${gradient} ${imageUrl}`,
          };

          return (
            <SwiperSlide 
              key={id}
              pagination={{ clickable: true }}
            >
              <div
                className="h-[calc(100vh-157px)] relative bg-cover bg-right-top"
                style={combinedStyle}
              >
                <Container className="z-10 h-full flex flex-col justify-center ">
                  <h2 className="md:text-5xl text-3xl sm:text-4xl text-white font-bold max-w-[700px] md:leading-[4rem]">{s.title}</h2>
                  <h4 className="mt-2 text-2xl text-white">{s.sub_title}</h4>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
   </section>
  );
};

export default Slider;

