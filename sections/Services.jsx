import React from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { services } from "../constants";
import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";
import {
  BsFillArrowUpRightCircleFill,
  BsArrowReturnRight,
} from "react-icons/bs";
import styles from "../styles";
function Services() {
  return (
    <section className=" py-[16] px-[20px] text-white">
      {/* <TypingText
        title="What we do"
        textStyles="font-mortend uppercase text-[48px] py-[32px] border-b-2 border-solid border-silver"
      /> */}
      <div className="bg-silver-light rounded-[20px] pt-[47px] pb-[14px] px-[80px]">
        <h2 className={`${styles.sectionHeading} text-black-light`}>
          our <br /> services
        </h2>
        <ul>
          {services.map((service, index) => (
            <li
              key={index}
              className="service flex items-center py-[56px] pr-[30px] border-b-2 border-solid text-black-light border-silver cursor-pointer"
            >
              <BsArrowReturnRight className="w-fit text-bold text-[26px] mr-[10px] hidden" />
              <div className="w-full flex justify-between items-center">
                <h4 className={`${styles.subHeading}`}>{service.title}</h4>
                <p className={`w-[807px] ${styles.text}`}>
                  {service.description}
                </p>
                <BsFillArrowUpRightCircleFill className="text-4xl " />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
