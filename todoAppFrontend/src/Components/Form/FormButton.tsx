import React from 'react';

interface FormButtonProps {
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  label: string;
  disabled?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({ onClick, label, type, disabled }) => {
  const buttonClasses = disabled
    ? 'w-32 h-10 border-2 rounded-md mt-4 border-silver_lake_blue-200 font-poppins  dark:border-silver_lake_blue-700 text-silver_lake_blue-200 dark:text-silver_lake_blue-500 opacity-30'
    : 'w-32 h-10 border-2 rounded-md mt-4 border-silver_lake_blue-200 font-poppins  dark:border-silver_lake_blue-700 text-silver_lake_blue-200 dark:text-silver_lake_blue-500 hover:bg-silver_lake_blue-200 dark:hover:bg-silver_lake_blue-700 hover:text-silver_lake_blue-800 dark:hover:text-silver_lake_blue-300';
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    type === 'submit' ? null : e.preventDefault();
    onClick ? onClick() : null;
  };

  return (
    <button
      type={type}
      onClick={(e) => {
        handleClick(e);
      }}
      disabled={disabled}
      className={buttonClasses}
    >
      {label}
    </button>
  );
};

export default FormButton;
