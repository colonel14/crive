import React from "react";
import { motion } from "framer-motion";
// import { socials } from "../constants";
import { footerVariants } from "../utils/motion";

import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="px-16 py-8 relative"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="/logo.png"
              alt="logo"
              loading="lazy"
            />
          </Link>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022{" "}
            <span className="text-secondary">Crive.</span> All rights reserved.
          </p>

          <div className="flex gap-4 text-white text-xl	">
            <FaFacebookF />
            <FaTwitter />
            <BsInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
