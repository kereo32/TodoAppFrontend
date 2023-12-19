import React from 'react';
import { FaSpinner } from 'react-icons/fa';
const Loading: React.FC = () => {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <FaSpinner className="animate-spin text-silver_lake_blue-200 dark:text-silver_lake_blue-500 text-4xl" />
      <p className="text-silver_lake_blue-200 dark:text-silver_lake_blue-500">Loading...</p>
    </div>
  );
};

export default Loading;
