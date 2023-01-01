import Link from "next/link";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-[90vh] pt-[200px] pb-[55px] px-[100px] text-center"
    >
      <h1 className="uppercase text-[#ECECEC] leading-16 text-[24px] font-semibold">
        REFLECT YOUR VISION
      </h1>
      <div className="relative h-[1134px]">
        <Image
          width={1719.52}
          height={1134}
          src="/THROUGHDESIGN.svg"
          alt="Through Design"
        />
        <Image
          className="absolute -bottom-[140px] left-2/4 -translate-x-2/4"
          width={1334}
          height={911}
          src="/TV.png"
          alt="TV"
        />
      </div>
      <h1 className="mt-[120px] uppercase text-[#ECECEC] leading-16 text-[24px] font-semibold">
        We’re a digital agency whose clients win because we speak the same
        language as google and facebook.
      </h1>
    </motion.section>
  );
}

export default Hero;
