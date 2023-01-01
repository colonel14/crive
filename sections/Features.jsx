import React from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { HiOutlineFingerPrint, HiOutlineLightBulb } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";
const features = [
  {
    icon: <HiOutlineFingerPrint />,
    title: "Stand alone",
    description:
      "We’re a digital agency whose clients win because we speak the same language as google and facebook.",
  },
  {
    icon: <BiTimeFive />,
    title: "Short delivery time",
    description:
      "We understand how a one day delay could mess up your whole plan, which is we committed with our word.",
  },
  {
    icon: <HiOutlineLightBulb />,
    title: "Fearless creativity",
    description:
      "We believe in the power of fearless creativity. That’s why it lives in every problem we solve and every product we deliver.",
  },
];

function Features() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" px-17 py-[77px] gap-x-15 bg-secondary text-white flex items-center"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        >
          <span className="text-silver-light inline-block mb-[21px] text-5xl text-bold">
            {feature.icon}
          </span>
          <h4 className="text-silver-light font-mortend uppercase text-[25px] tracking-tight font-bold mb-[8.5px] ">
            {feature.title}
          </h4>
          <p className="text-silver-light text-lg	font-medium tracking-[-1px] leading-[23px]">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}

export default Features;
