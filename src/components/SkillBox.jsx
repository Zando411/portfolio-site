import { useState } from 'react';

export default function SkillBox({ className, skillName }) {
  const [colored, setColored] = useState(false);

  return (
    <div
      className=" bg-gray-950 rounded-xl hover:bg-gray-900 transition-colors duration-200 outline-1 outline-gray-700 text-center p-3"
      onMouseEnter={() => setColored(true)}
      onMouseLeave={() => setColored(false)}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="icon mt-2">
          <i
            className={`${className} text-4xl ${
              colored ? 'colored scale-120' : 'scale-100'
            } inline-block transition-all duration-200 ease-in-out `}
          />
        </div>
        <p>{skillName}</p>
      </div>
    </div>
  );
}
