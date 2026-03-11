import { motion } from "motion/react";
import { FaLaptopCode } from "react-icons/fa";
import { FaHome, FaUser, FaTools, FaEnvelope } from "react-icons/fa";
import { TbBrandVk } from "react-icons/tb";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

function Nav() {
  return (
    <div className="flex justify-around items-center h-16 fixed bg-[#17263d] w-full z-30 border-b border-gray-400">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.02 }}
      >
        <a
          href="#home"
          className="text-[#37baf3] text-2xl font-bold flex items-center"
        >
          <TbBrandVk className="size-10 " />
          <span className=" ml-2 hidden sm:flex">VIVEK</span>
        </a>
      </motion.div>

      <motion.div className="flex">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-8 text-lg "
        >
          <motion.li  variants={item} className="active:scale-95 hover:scale-102">
            <a href="#home" className="flex items-center gap-2">
              <FaHome className="sm:hidden text-xl" />
              <span className="hidden sm:inline">Home</span>
            </a>
          </motion.li>

          <motion.li  variants={item} className="active:scale-95 hover:scale-102 ">
            <a href="#about" className="flex items-center gap-2">
              <FaUser className="sm:hidden text-xl" />
              <span className="hidden sm:inline">About</span>
            </a>
          </motion.li>

          <motion.li  variants={item} className="active:scale-95 hover:scale-102 ">
            <a href="#skills" className="flex items-center gap-2">
              <FaTools className="sm:hidden text-xl" />
              <span className="hidden sm:inline">Skills</span>
            </a>
          </motion.li>

          <motion.li  variants={item} className="active:scale-95 hover:scale-102 ">
            <a href="#projects" className="flex items-center gap-2">
              <FaLaptopCode className="sm:hidden text-xl" />
              <span className="hidden sm:inline">Projects</span>
            </a>
          </motion.li>

          <motion.li  variants={item} className="active:scale-95 hover:scale-102 ">
            <a href="#contact" className="flex items-center gap-2">
              <FaEnvelope className="sm:hidden text-xl" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
      <div className="ml-15 hidden sm:flex"></div>
    </div>
  );
}

export default Nav;
