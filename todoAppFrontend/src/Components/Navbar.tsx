import useDarkModeToggle from '../Hooks/useThemeSwitch';

function Navbar() {
  const handleThemeSwitchClick = useDarkModeToggle();
  return (
    <div className={`flex flex-nowrap flex-row w-full h-24 bg-silver_lake_blue-700 dark:bg-silver_lake_blue-200 justify-center items-center`}>
      <p className={`text-4xl font-poppins text-vista_blue-300 dark:text-vista_blue`}>todo app</p>
      <button onClick={handleThemeSwitchClick}>xddxxddxd</button>
    </div>
  );
}

export default Navbar;
