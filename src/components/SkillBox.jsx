import { useState } from "react";

export default function SkillBox({ className, skillName, setHovered }) {
  const [colored, setColored] = useState(false);

  const handleMouseEnter = () => {
    setColored(true);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setColored(false);
  };

  return (
    <>
      <div
        className={`group z-0 rounded-xl bg-gray-950 p-3 text-center shadow-none outline-1 outline-gray-700 transition-colors duration-200 hover:z-50 hover:bg-gray-900 hover:shadow-[0px_0px_60px_30px] hover:ring-2 hover:shadow-indigo-950/50 hover:ring-indigo-900`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="icon mt-2">
            <i
              className={`${className} inline-block scale-100 text-4xl text-slate-600 transition-all duration-200 ease-in-out group-hover:scale-120 ${
                colored ? "colored" : ""
              }`}
            />
          </div>
          <p>{skillName}</p>
        </div>
      </div>
    </>
  );
}
