import '../styles/global.css';
import SkillBox from './SkillBox';
import { useState } from 'react';

const skills = [
  { name: 'HTML', className: 'devicon-html5-plain' },
  { name: 'CSS', className: 'devicon-css3-plain' },
  { name: 'JavaScript', className: 'devicon-javascript-plain' },
  { name: 'React', className: 'devicon-react-original' },
  { name: 'Astro', className: 'devicon-astro-plain' },
  { name: 'Express', className: 'devicon-express-original' },
  { name: 'Tailwind', className: 'devicon-tailwindcss-plain' },
  { name: 'MongoDB', className: 'devicon-mongodb-plain' },
  { name: 'Python', className: 'devicon-python-plain' },
  { name: 'C/C++', className: 'devicon-c-plain' },
];

export default function Skills() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div
        className="container p-4 grid grid-cols-2 gap-4 md:grid-cols-5"
        onMouseLeave={() => setHovered(false)}
      >
        {skills.map((skill, index) => (
          <SkillBox
            key={index}
            className={skill.className}
            skillName={skill.name}
            setHovered={setHovered}
          />
        ))}
      </div>
      <div
        className={` ${
          hovered
            ? 'fixed inset-0 w-full h-full bg-black/70 z-30 transition-all duration-200 ease-in-out'
            : ''
        }`}
      ></div>
    </div>
  );
}
