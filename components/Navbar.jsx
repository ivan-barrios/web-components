"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../motion";

// You can organize the navbar in any way you want

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="sm:px-16 px-6 py-8 relative"
  >
    {/* The following div is only to show the gradient */}
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        LOGO/TITLE
      </h2>
      <ul className="hidden md:flex gap-12 mr-8 text-xl">
        <li className="text-white font-medium">
          <a href="#">NavElement1</a>
        </li>
        <li className="text-white font-medium">
          <a href="#">NavElement2</a>
        </li>
        <li className="text-white font-medium">
          <a href="#">NavElement3</a>
        </li>
      </ul>
      <Image
        src="/menu.svg"
        alt="Menu"
        className="object-contain md:hidden"
        width={24}
        height={24}
      />
    </div>
  </motion.nav>
);

export default Navbar;
