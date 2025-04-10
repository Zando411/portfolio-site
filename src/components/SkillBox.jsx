import { useState } from 'react';

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
        className={` bg-gray-950 rounded-xl group hover:bg-gray-900 transition-colors duration-200 outline-1 outline-gray-700 text-center p-3 shadow-none z-0 hover:shadow-[0px_0px_60px_30px] hover:shadow-indigo-950/50 hover:ring-2 hover:ring-indigo-900 hover:z-50`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="icon mt-2">
            <i
              className={`${className} text-4xl text-slate-600 scale-100 group-hover:scale-120 inline-block transition-all duration-200 ease-in-out ${
                colored ? 'colored' : ''
              }`}
            />
          </div>
          <p>{skillName}</p>
        </div>
      </div>
    </>
  );
}
