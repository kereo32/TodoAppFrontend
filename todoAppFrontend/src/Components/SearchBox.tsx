import search from '/images/search.png';
import { useState } from 'react';

const Searchbox = ({ searchInput, setSearchInput }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="flex flex-row w-40 h-full justify-start items-center">
      <div className="relative w-full translate-x-[80%]">
        <img
          className="h-8 transition-all duration-300 transform cursor-pointer w-full"
          src={search}
          alt="search"
          style={{
            width: isHovering ? '40px' : '30px',
          }}
        />
        <input
          className={`border-2 border-gray-300 rounded-md p-2 absolute ${isHovering ? 'w-[80%]' : 'w-[40%]'} top-0 left-0 transition-all duration-300 ${
            isHovering ? 'pl-8 opacity-100' : 'opacity-0'
          }`}
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchbox;
