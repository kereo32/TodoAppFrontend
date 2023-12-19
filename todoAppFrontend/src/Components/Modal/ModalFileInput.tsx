import React, { ChangeEvent } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

interface ModalFileInputProps {
  labelText: string;
  name: string;
  fileType: string[];
  fileState: File | null;
  setFileState: React.Dispatch<React.SetStateAction<File | null>>;
}

const ModalFileInput: React.FC<ModalFileInputProps> = ({ labelText, name, fileType, setFileState }) => {
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    const renamedFile = selectedFile ? new File([selectedFile], 'file', { type: selectedFile.type }) : null;
    setFileState(renamedFile);

    if (renamedFile) {
      try {
        const formData = new FormData();
        formData.append('file', renamedFile);

        const response = await axios.post('https://todoserver-febeca6a6960.herokuapp.com/todo/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${Cookies.get('todoAppToken')}`,
          },
        });

        setFileState(response.data.fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-fit items-center mt-8">
      <label htmlFor={name} className="text-silver_lake_blue-700  w-[60%] dark:text-silver_lake_blue-200 font-poppins opacity-80">
        {labelText}
      </label>
      <input
        type="file"
        accept={fileType.join(',')}
        name="file"
        onChange={handleFileChange}
        className="border-2 w-[60%] border-silver_lake_blue-200 text-silver_lake_blue-700 dark:text-silver_lake_blue-200 dark:border-silver_lake_blue-700 rounded-md text-center placeholder-silver_lake_blue-200 dark:placeholder-silver_lake_blue-500"
      />
    </div>
  );
};

export default ModalFileInput;
