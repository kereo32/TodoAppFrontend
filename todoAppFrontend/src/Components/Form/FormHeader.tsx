import React from 'react';

type FormHeaderProps = {
  content: string;
  additionalClasses?: string[];
};

const FormHeader: React.FC<FormHeaderProps> = ({ content, additionalClasses }) => {
  return (
    <h1
      className={`font-poppins text-center text-silver_lake_blue-200 dark:text-silver_lake_blue-700 mt-4 ${additionalClasses?.map((styleClass) => styleClass)}`}
    >
      {content}
    </h1>
  );
};

export default FormHeader;
