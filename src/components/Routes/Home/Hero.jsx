import { Carousel } from "flowbite-react";
import React from "react";
import HomeSlider from "./HomeSlider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const customCarouselTheme = {};

  return (
    <section className="">
      <div className="h-[380px] hidden md:block">
        <Carousel
          theme={customCarouselTheme}
          leftControl={
            <button className="p-4 button rounded-full home_slider_left_btn">
              <FaChevronLeft />
            </button>
          }
          rightControl={
            <button className="p-4 button rounded-full home_slider_right_btn">
              <FaChevronRight />
            </button>
          }
        >
          <HomeSlider />
          <HomeSlider />
          <HomeSlider />
        </Carousel>
      </div>
    </section>
  );
}
