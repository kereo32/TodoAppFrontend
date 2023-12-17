import React from 'react';

const FormError: React.FC<{ error?: string }> = ({ error }) => {
  return <p className={`text-red-500 text-sm ${error ? 'visible' : 'invisible'}`}>{error}</p>;
};

export default FormError;
