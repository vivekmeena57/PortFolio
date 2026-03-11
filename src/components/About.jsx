import vkPhoto from "../assets/vkPhoto.jpeg";
import { motion } from "framer-motion";
import { MdSchool } from "react-icons/md";


export default function About() {
  return (
    <div className="flex flex-col items-center px-6 mt-5 mb-5">
      {/* Heading */}

      <motion.p
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: false }}
        className="text-lg text-gray-400"
      >
        GET TO KNOW ME
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: false }}
        className="text-4xl sm:text-5xl font-semibold mt-3"
      >
        <span className="text-[#37baf3]">About</span> Me
      </motion.h1>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
        className="h-36 w-36 sm:h-44 sm:w-44 border-4 border-blue-300 rounded-full overflow-hidden mt-8 shadow-2xl"
      >
        <img
          src={vkPhoto}
          alt="Vivek Meena"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
        className="max-w-2xl text-center text-gray-300 mt-6 text-sm sm:text-base"
      >
        Focused on developing full-stack web applications and solving real-world
        problems through code. I work on building responsive interfaces,
        efficient backend systems, and continuously improving my development
        skills through hands-on projects.
      </motion.p>

      {/* Education */}
      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#37baf3] mb-6">
          <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
          className="flex justify-center items-center gap-2">Education<MdSchool className="size-8" /></motion.p>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: false }}
          className="border border-gray-400 rounded-xl p-6 text-gray-300 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <h3>Swami Vivekanand College of Engineering</h3>
            <span>2023 - Present</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
            <p>Bachelor of Technology (CSE)</p>
            <p>CGPA: 6.88</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
