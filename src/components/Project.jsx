import { span } from "motion/react-client";
import project1img from "../assets/project1img.png";
import project2img from "../assets/project2img.png";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      title: "ProConnect",
      description: [
        "A full-stack professional networking platform where users can create accounts, share posts, connect with others, and manage their profiles.",
        "Implemented secure authentication and authorization using JWT.",
        "Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a responsive UI.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "MVC Architecture",
        "Soket.io",
      ],
      image: project1img,
      github:"https://github.com/vivekmeena57/ProConnect_Project.git",
      live:"https://proconnect-frontend-ochre.vercel.app"
    },
    {
      title: "WonderLust",
      description: [
        "A full-stack rental platform where users can explore, create, edit, and manage property listings.",
        "Implemented user authentication and authorization to allow secure listing management and reviews.",
        "Built using Node.js, Express.js, MongoDB, and EJS, following the MVC architecture with a responsive UI.And Deploy on Render",
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "EJS ",
        "MongoDB Atlas",
        "MVC Architecture",
        "Cloudinary",
        "Render",
        "Error Handling",
      ],
      image: project2img,
      github:"https://github.com/vivekmeena57/Wonderlust_Project.git",
      live:"https://wonderlust-project-ghyg.onrender.com"
    },
  ];

  return (
    <div className="flex flex-col items-center mb-15 px-6">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
        className="text-xl text-gray-400"
      >
        EXPLORE MY CREATIONS
      </motion.p>

      <motion.h1 
       initial={{ opacity: 0, y:40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
      className="text-5xl font-semibold mt-3">
        <span className="text-[#37baf3]">Projects</span>
      </motion.h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {projects.map((project, index) => (
          <motion.span key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <ProjectCard key={index} ProjectDetails={project} />
          </motion.span>
        ))}
      </div>
    </div>
  );
}
