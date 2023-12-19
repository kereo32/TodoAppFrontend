import useDarkModeToggle from '../Hooks/useThemeSwitch';
import { useState } from 'react';
import darkmode from '/images/darkmode.png';
import github from '/images/github.png';
function Navbar() {
  const handleThemeSwitchClick = useDarkModeToggle();
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovering((prev) => !prev);
      }}
      onMouseLeave={() => {
        setIsHovering((prev) => !prev);
      }}
      className={`flex flex-nowrap flex-row w-full h-24 bg-silver_lake_blue-700 dark:bg-silver_lake_blue-200 justify-between items-center`}
    >
      <button onClick={handleThemeSwitchClick}>
        <img src={darkmode} className=" pl-6 w-16 invert-0 dark:invert" />
      </button>
      <p className={`text-4xl font-poppins text-vista_blue-300 dark:text-vista_blue`}>{isHovering ? 'Or not :(' : 'TO-DO'}</p>
      <a href="https://www.github.com/kereo32" target="_blank" rel="noopener noreferrer">
        <img src={github} className=" pr-6 w-16 invert-0 dark:invert" />
      </a>
    </div>
  );
}

export default Navbar;
