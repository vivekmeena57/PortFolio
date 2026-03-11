function CardSkill({ title, skills }) {
  return (
    <div className="p-2 h-96 w-80 border-2 rounded-2xl border-gray-500 shadow-2xl hover:shadow hover:shadow-blue-400">
      <div className="flex justify-center text-[#37baf3] text-xl font-bold border-b border-gray-400 pb-1">
        <h3>{title}</h3>
      </div>
      <div>
        <ul className="flex flex-col gap-5 pt-6 pl-5 ">
          {skills.map((skill, index) => (
            <li key={index} className="flex gap-4 items-center hover:scale-101 ">
              {skill.icon}
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardSkill;
