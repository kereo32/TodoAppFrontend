import { useState } from 'react';

const useFormData = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return { formData, handleInputChange };
};

export default useFormData;
