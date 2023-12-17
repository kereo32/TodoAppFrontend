import React from 'react';

interface FormButtonProps {
  onClick?: () => void;
  label: string;
}

const FormButton: React.FC<FormButtonProps> = ({ onClick, label }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick ? onClick() : null;
  };

  return (
    <button
      onClick={(e) => {
        handleClick(e);
      }}
      className="w-32 h-10 border-2 rounded-md mt-4 border-silver_lake_blue-200 dark:border-silver_lake_blue-700 font-poppins text-silver_lake_blue-200 dark:text-silver_lake_blue-500 hover:bg-silver_lake_blue-200 dark:hover:bg-silver_lake_blue-700 hover:text-silver_lake_blue-800 dark:hover:text-silver_lake_blue-300"
    >
      {label}
    </button>
  );
};

export default FormButton;
