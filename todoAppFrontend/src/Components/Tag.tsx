import React from 'react';

const Tag: React.FC<{
  tag: { tag: string; isActive: boolean };
  updateFilter: React.Dispatch<React.SetStateAction<{ tag: string; isActive: boolean }[]>>;
}> = ({ tag, updateFilter }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    updateFilter((prevTags) =>
      prevTags.map((prevTag) => ({
        ...prevTag,
        isActive: prevTag.tag === tag.tag ? !prevTag.isActive : prevTag.isActive,
      }))
    );
  };

  return (
    <div className={`flex flex-row w-[50%] m-[0.1rem] rounded-md justify-center bg-delft_blue-900 ${!tag.isActive && 'opacity-40'}`}>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <p className="text-white text-xs font-bold">{tag.tag}</p>
      </button>
    </div>
  );
};

export default Tag;
