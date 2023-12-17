import useDarkModeToggle from '../Hooks/useThemeSwitch';
import { useState } from 'react';
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
      className={`flex flex-nowrap flex-row w-full h-24 bg-silver_lake_blue-700 dark:bg-silver_lake_blue-200 justify-center items-center`}
    >
      <p className={`text-4xl font-poppins text-vista_blue-300 dark:text-vista_blue`}>{isHovering ? 'Or not :(' : 'TO-DO'}</p>
      <button onClick={handleThemeSwitchClick}>dark</button>
    </div>
  );
}

export default Navbar;
