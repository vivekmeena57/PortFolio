import CardSkill from "./CardSkill";
import { motion } from "framer-motion";

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaNpm } from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGit,
  SiRedux,
  SiBootstrap,
  SiGithub,
  SiPostman,
  SiCloudinary,
  SiJsonwebtokens,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";
import { MdErrorOutline } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const frontendSkills = [
    { name: "HTML5", icon: <IoLogoHtml5 className="text-[#E34F26] text-xl" /> },
    { name: "CSS3", icon: <IoLogoCss3 className="text-[#1572B6] text-xl" /> },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-[#F7DF1E] text-xl" />,
    },
    { name: "React", icon: <FaReact className="text-[#61DAFB] text-xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-[#38BDF8] text-xl" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-500 text-xl" />,
    },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-xl" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-100 text-xl" />,
    },
    { name: "REST APIs", icon: <TbApi className="text-blue-400 text-xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" /> },
    {
      name: "JWT Authentication",
      icon: <SiJsonwebtokens className="text-red-500 text-xl" />,
    },
    {
      name: "Middleware",
      icon: <GiProcessor className="text-purple-400 text-xl" />,
    },
    {
      name: "Error Handling",
      icon: <MdErrorOutline className="text-orange-400 text-xl" />,
    },
  ];

  const tools = [
    { name: "Git", icon: <SiGit className="text-red-500 text-xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-white text-xl" /> },
    { name: "VS Code", icon: <VscVscode className="text-[#007ACC] text-xl" /> },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 text-xl" />,
    },
    {
      name: "Cloudinary",
      icon: <SiCloudinary className="text-blue-400 text-xl" />,
    },
    { name: "NPM", icon: <FaNpm className="text-red-600 text-xl" /> },
  ];

  return (
    <div className="flex flex-col items-center py-20 px-6">
      {/* Heading */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-5xl font-semibold"
        >
          <span className="text-[#37baf3]">Technical</span>{" "}
          <span>Expertise</span>
        </motion.h1>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-14 max-w-6xl">
        <motion.span
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <CardSkill title="Frontend" skills={frontendSkills} />
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <CardSkill title="Backend" skills={backendSkills} />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <CardSkill title="Tools & Technologies" skills={tools} />
        </motion.span>
      </div>
    </div>
  );
}

export default Skills;
