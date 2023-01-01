import React from "react";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
function Navbar({ router }) {
  const { asPath } = useRouter();
  const path = asPath.replace("/", "");

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="px-[100px] py-[29px]"
    >
      <div className="flex justify-between gap-x-16">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src="/logo.png"
            alt="logo"
            loading="lazy"
          />
        </Link>
        <nav className="flex items-center pt-3 gap-x-16">
          <Link
            href="/portofolio"
            className={`${
              path == "portofolio" ? "text-primary" : ""
            } text-silver-light inline-block text-[18px] font-normal `}
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className={`${
              path == "services" ? "text-primary" : ""
            } text-silver-light inline-block text-[18px] font-normal `}
          >
            Services
          </Link>
          <Link
            href="/assets"
            className={`${
              path == "assets" ? "text-primary" : ""
            } text-silver-light inline-block text-[18px] font-normal `}
          >
            Assets
          </Link>
          <Link
            href="/services"
            className={`${
              path == "services" ? "text-primary" : ""
            } text-silver-light inline-block text-[18px] font-normal `}
          >
            About Us
          </Link>
        </nav>
        <Link
          href="/contact"
          className="bg-primary px-[28px] py-[14px] text-black-light rounded-[24px] font-bold text-[14px] text-center"
        >
          Contact
        </Link>
      </div>
    </motion.header>
  );
}

export default Navbar;
