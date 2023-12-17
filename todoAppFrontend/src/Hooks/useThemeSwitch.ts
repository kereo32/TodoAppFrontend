import { useEffect } from 'react';

const useDarkModeToggle = (): (() => void) => {
  const updateTheme = (theme: string) => {
    localStorage.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const handleClick = () => {
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
      updateTheme('light');
    } else {
      updateTheme('dark');
    }
  };

  useEffect(() => {
    if (localStorage.theme) {
      updateTheme(localStorage.theme);
    }
  }, []);

  return handleClick;
};

export default useDarkModeToggle;
