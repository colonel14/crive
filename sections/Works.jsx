import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { works } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "../styles";
import Image from "next/image";
function Works() {
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
    <section className="relative z-1 py-28 text-white">
      <div>
        <h2 className={`relative ${styles.sectionHeading} ml-[100px] w-fit`}>
          Our recent <br />
          work
          <Image
            width={150}
            height={150}
            src="/works-icon.png"
            className="absolute -top-10 right-0 -z-1 object-cover"
            alt="works-icon"
            loading="lazy"
          />
        </h2>
        {/* <div className=" flex items-center gap-x-6 mt-4">
          <span
            className="w-16 h-16 flex items-center justify-center text-2xl text-silver border-silver border-solid border-2 rounded-full hover:bg-silver hover:text-black  cursor-pointer"
            onClick={() => scroll("left")}
          >
            <BsChevronLeft />
          </span>
          <span
            className="w-16 h-16 flex items-center justify-center text-2xl text-silver border-silver border-solid border-2 rounded-full hover:bg-silver hover:text-black cursor-pointer"
            onClick={() => scroll("right")}
          >
            <BsChevronRight />
          </span>
        </div> */}
      </div>
      <motion.div className="cursor-grab" ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          className="flex flex-nowrap gap-x-[20px]"
        >
          {works.map((work, index) => (
            <div
              key={index}
              className="text-white w-[801px] first-of-type:ml-[100px]"
            >
              <div className="w-[801px] h-[523px] bg-[#222222] rounded-[15px]"></div>
              <h4
                className={`${styles.cardHeading} mt-[27px] mb-[15px] text-silver-light `}
              >
                {work.title}
              </h4>
              <p
                className={`${styles.text} text-[#909090] w-[757px] tracking-normal pr-[41px] text-[18px]`}
              >
                {work.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Works;
