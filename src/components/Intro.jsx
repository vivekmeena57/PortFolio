import { motion } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";



function Intro() {
  return (
    <div className="flex flex-col px-6 mb-25">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center mt-40 sm:mt-32 md:mt-40 gap-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl opacity-90"
        >
          Hello, I'm Vivek
        </motion.h3>

        <motion.h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "linear" }}
            viewport={{ once: false }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            <span className="text-[#37baf3]">Full-Stack</span> Developer
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="opacity-60 text-sm sm:text-base"
        >
          I craft scalable full-stack experiences
        </motion.p>
      </div>

      {/* Description */}
      <div className="flex justify-center mt-6">
        < motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
          viewport={{ once: false }}
         className="max-w-xl text-gray-200 text-center text-sm sm:text-base">
          Hi, I'm Vivek Meena, a MERN Stack Developer focused on building
          responsive and user-friendly web applications. I work with React,
          Node.js, Express, and MongoDB to create modern web projects and
          continuously improve my development skills.
        </motion.p>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="flex flex-col sm:flex-row gap-4 ">
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            href="/vivekResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#28a5db] rounded-md hover:scale-105 active:scale-95 transition text-center shadow-2xl"
          >
           <p className="flex items-center gap-1 " >My Resume <FaArrowDown className="mt-0.5" /></p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            href="https://www.linkedin.com/in/vivek-meena-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#28a5db] rounded-md hover:scale-105 active:scale-95 transition text-center shadow-2xl"
          >
            <p className="flex items-center gap-1 ">Let's Connect<FaLink className="size-5" /></p>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6 border-2 border-gray-500 rounded-full px-6 py-3 shadow-2xl"
        >
          <a
            href="https://www.linkedin.com/in/vivek-meena-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition hover:scale-105"
          >
            <ImLinkedin className="size-5 sm:size-6" />
            LinkedIn
          </a>

          <a
            href="https://github.com/vivekmeena57"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition hover:scale-105"
          >
            <FaGithub className="size-5 sm:size-6" />
            GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
