import React from 'react';

interface ModalInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const ModalInput: React.FC<ModalInputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 border-2 w-[60%] border-silver_lake_blue-200 text-silver_lake_blue-700 dark:text-silver_lake_blue-200 dark:border-silver_lake_blue-700 rounded-md text-center placeholder-silver_lake_blue-200 dark:placeholder-silver_lake_blue-500 mt-10"
    />
  );
};

export default ModalInput;
