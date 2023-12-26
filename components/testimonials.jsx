import React, { useEffect, useRef } from 'react';
import Container from './UI/container';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useAnimation, useInView, motion } from 'framer-motion';
import { storyblokEditable } from '@storyblok/react';

const fadeInUp = {
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, transform: 'translateY(50%)' },
};

const Testimonials = ({ blok }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = React.useRef(null);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible'); // Use 'visible' as the state name
    }
  }, [controls, isInView]);

  return (
    <section
      ref={ref}
      className="py-16 bg-gray-50 relative"
      {...storyblokEditable(blok)}
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl mx-auto text-center lg:text-left">
            <motion.h2
              animate={controls}
              initial="hidden"
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {blok.title}
            </motion.h2>

            <motion.p
              animate={controls}
              initial="hidden"
              variants={fadeInUp}
              className="mt-4 text-gray-700"
            >
              {blok.sub_title}
            </motion.p>

            <motion.div
              animate={controls}
              initial="hidden"
              variants={fadeInUp}
              className="hidden lg:mt-8 lg:flex lg:gap-4"
            >
              <button
                className="border rounded-full md:p-4 p-3 text-xl bg-transparent hover:bg-primary hover:text-white"
                onClick={() => slider?.current?.slickPrev()}
              >
                <FaChevronLeft />
              </button>
              <button
                className="border rounded-full md:p-4 p-3 text-xl bg-transparent hover:bg-primary hover:text-white"
                onClick={() => slider?.current?.slickNext()}
              >
                <FaChevronRight />
              </button>
            </motion.div>
          </div>
          <div className="lg:col-span-2 mt-10 ">
            <Slider ref={slider} {...settings}>
              {blok?.testimonail_list.map((item, idx) => {
                return (
                  <motion.div
                    key={idx}
                    animate={controls}
                    initial="hidden"
                    variants={fadeInUp}
                    className="px-4"
                  >
                    <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-primary">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-primary sm:text-3xl">
                            {item.title}
                          </p>
                          <p className="mt-4 leading-relaxed text-gray-700">
                            {item?.feedback}
                          </p>
                        </div>
                      </div>
                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; {item?.name}
                      </footer>
                    </blockquote>
                  </motion.div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
