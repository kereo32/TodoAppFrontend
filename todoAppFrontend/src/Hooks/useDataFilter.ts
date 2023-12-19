import { useState, useEffect } from 'react';
import { Todo } from '../constants/types';

type tag = {
  tag: string;
  isActive: boolean;
};

const useDataFilter = (unfilteredData: Todo[], filterOptions: [string, { tag: string; isActive: boolean }[]]) => {
  const [filteredData, setFilteredData] = useState(unfilteredData);

  useEffect(() => {
    let updatedData = [...unfilteredData];

    if (filterOptions && filterOptions.length > 0) {
      filterOptions.forEach((option: string | tag[]) => {
        if (typeof option === 'string') {
          updatedData = updatedData.filter((item: Todo) => item.title.toLowerCase().includes(option.toLowerCase()));
        } else if (Array.isArray(option)) {
          updatedData = updatedData.filter((item: Todo) => {
            return item.tags.some((tag: string) => {
              const matchingTag = option.find((filterTag) => filterTag.tag === tag);
              return matchingTag && matchingTag.isActive;
            });
          });
        }
      });
    }

    updatedData.sort((a, b) => new Date(b.lastUpdatedDate).getTime() - new Date(a.lastUpdatedDate).getTime());

    if (JSON.stringify(filteredData) !== JSON.stringify(updatedData)) {
      setFilteredData(updatedData);
    }
  }, [unfilteredData, filterOptions]);

  return { filteredData };
};

export default useDataFilter;
