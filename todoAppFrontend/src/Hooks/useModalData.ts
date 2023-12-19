import { useState } from 'react';

const useModalData = () => {
  const [modalData, setModalData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  return { modalData, handleInputChange, setModalData };
};

export default useModalData;
