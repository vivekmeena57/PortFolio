export default function ProjectCard({ ProjectDetails }) {
  return (
    <div className="p-4 max-w-sm border-2 rounded-2xl border-gray-500 shadow-md hover:shadow-blue-300 transition flex flex-col">
      {/* Title */}
      <div className="text-xl font-semibold flex justify-center border-b-2 border-gray-500 mb-4 text-blue-300">
        {ProjectDetails.title}
      </div>

      {/* Description */}
      <ul className="text-gray-200 text-sm list-disc pl-5 space-y-1">
        {ProjectDetails.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 justify-center mt-5">
        {ProjectDetails.techStack.map((tech, i) => (
          <p
            key={i}
            className="border text-gray-300 border-gray-500 hover:border-gray-400 px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </p>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <a
          href={ProjectDetails.live}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 hover:border-blue-300 hover:scale-105 active:scale-95 transition cursor-pointer px-3 py-1 text-gray-300 rounded-lg"
        >
          Live Site
        </a>

        <a
          href={ProjectDetails.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 hover:border-blue-300 hover:scale-105 active:scale-95 transition cursor-pointer px-3 py-1 text-gray-300 rounded-lg"
        >
          GitHub
        </a>
      </div>

      {/* Image */}
      <div className="border mt-6 h-40 rounded-md overflow-hidden ">
        <img
          src={ProjectDetails.image}
          alt={ProjectDetails.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 "
        />
      </div>
    </div>
  );
}
