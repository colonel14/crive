import React, { useRef, useState, useEffect } from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import { TypingText } from "../components/CustomTexts";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import styles from "../styles";

function Testimonials() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setCarouselWidth(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  }, []);

  const scroll = (direction) => {
    const { current } = carousel;
    if (direction === "left") {
      current.scrollLeft -= carousel.current.offsetWidth;
    } else {
      current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <section className=" z-1 px-[100px] py-28  text-white">
      <div className="relative z-1 mb-[46px]">
        <div className="flex justify-between items-center">
          <h2 className={`${styles.sectionHeading}`}>
            What our <br />
            clients say
            <Image
              width={55}
              height={34}
              src="/quote.png"
              className="absolute -top-[1.5rem] right-0 -z-1"
              alt="works-icon"
              loading="lazy"
            />
          </h2>
          <div className="flex gap-x-[44px] ">
            <span
              className="text-xl text-silver  hover:text-black  cursor-pointer"
              onClick={() => scroll("left")}
            >
              <BsChevronLeft />
            </span>
            <span
              className="text-xl text-silver  hover:text-black cursor-pointer"
              onClick={() => scroll("right")}
            >
              <BsChevronRight />
            </span>
          </div>
        </div>
        {/* <TypingText
          title=""
          textStyles="relative z-1 uppercase w-fit text-5xl font-bold traking-[-1px] leading-10"
        /> */}
      </div>

      <motion.div
        className="overflow-hidden works-gallery"
        ref={carousel}
        variants={fadeIn("left", "spring", 0.3, 1)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          className="flex flex-nowrap gap-x-1.5"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-white min-w-full">
              <p className="text-white w-full mb-[13px] text-[22px] tracking-normal leading-[33px] font-medium">
                {testimonial.message}
              </p>
              <div className="flex gap-x-[10px] items-center text-silver-light ">
                <div className="w-[62px] h-[62px] rounded-full bg-[#262626]"></div>
                <div>
                  <h4 className="font-medium text-[20px] italic">
                    {testimonial.client}
                  </h4>
                  <p className="font-light text-[18px] italic">
                    {testimonial.job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
