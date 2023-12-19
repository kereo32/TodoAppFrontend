import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface ModalTagEditorProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const ModalTagEditor: React.FC<ModalTagEditorProps> = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState<string>('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && tagInput.trim() !== '') {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
      event.preventDefault();
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value.replace(/^#/, ''));
  };

  return (
    <div className="flex flex-col w-[60%] mt-10">
      <label className="text-vista_blue-500 font-poppins font-bold text-sm">
        Add Tags <span className="font-thin text-md text-black opacity-80">{'(Press Enter to Add)'}</span>
      </label>
      <input
        className=" h-8 w-full border-2 border-blue-300 rounded-md px-2 py-1 focus:outline-none focus:vista_blue-400 text-vista_blue-500 font-poppins font-semibold text-sm"
        type="text"
        value={`#${tagInput}`}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter to add tags"
      />
      <div className="flex flex-col items-center w-full max-h-20 overflow-scroll">
        <strong className="text-vista_blue-100 mt-2 font-poppins font-semibold text-sm">Tags : {tags.length}</strong>
        <ul>
          {tags.map((tag, index) => (
            <li className="text-vista_blue-200 font-poppins font-semibold text-sm mt-1" key={index}>
              #{tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalTagEditor;
