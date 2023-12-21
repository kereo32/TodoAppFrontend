import React, { useState, useEffect } from 'react';
import { StoreState, Todo as TodoItemData } from '../../constants/types';
import { useSelector } from 'react-redux';

import plus from '/images/plus.png';

import TodoItem from './TodoItem';
import FormHeader from '../Form/FormHeader';
import Searchbox from '../SearchBox';
import Tagsearch from '../Tagsearch';

import useModal from '../../Hooks/useModal';
import AddTodoModal from '../Modal/AddTodoModal';

import useDataFilter from '../../Hooks/useDataFilter';

const TodoList: React.FC<{ data: TodoItemData[] }> = ({ data }) => {
  const { ModalComponent, openModal, closeModal } = useModal();
  const [searchFilter, updateSearchFilter] = useState<string>('');
  const [tagFilter, updateTagFilter] = useState<{ tag: string; isActive: boolean }[]>([]);
  const { userInformation } = useSelector((state: StoreState) => state.user);
  const [isTagFilterActive, setIsTagFilterActive] = useState(false);

  useEffect(() => {
    updateTagFilter(
      data
        ?.map((item) => item.tags)
        .flat()
        .filter((value, index, self) => self.indexOf(value) === index)
        .map((tag) => ({ tag, isActive: true }))
    );
  }, [data]);

  console.log(tagFilter);

  const { filteredData } = useDataFilter(data, [searchFilter, tagFilter], isTagFilterActive);

  return (
    <div className="flex flex-col w-[40%] h-[80%] justify-start items-center">
      <ModalComponent
        styleContent={{
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: '30%',
          height: '75%',
          padding: '0',
          margin: '0',
          borderColor: '#3e71af',
          borderRadius: '0.4rem',
          boxShadow: '0 0 0 0.05rem white',
        }}
      >
        <AddTodoModal closeModal={closeModal} />
      </ModalComponent>
      <FormHeader additionalClasses={['text-3xl']} content={`${userInformation?.username}'s Todo List!`} />
      {data.length > 0 ? (
        <>
          <div className="flex flex-row w-[100%] h-[20%] justify-between items-center">
            <Searchbox searchInput={searchFilter} setSearchInput={updateSearchFilter} />
            {tagFilter.length > 0 && (
              <Tagsearch
                tags={tagFilter}
                isTagFilterActive={isTagFilterActive}
                updateTagFilter={updateTagFilter}
                toggleTagFilter={() => setIsTagFilterActive(!isTagFilterActive)}
              />
            )}
          </div>
          <div className="flex flex-col w-[60%] h-[2%] items-end justify-center">
            <img onClick={openModal} className=" opacity-60 hover:opacity-100 w-[4%] hover:w-[5%] -m-2" src={plus} />
          </div>
          <div className="flex flex-col w-full h-full justify-start items-center overflow-scroll">
            {filteredData?.map((item: TodoItemData, index: number) => (
              <TodoItem key={index} data={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col w-full h-[50%] justify-center items-center opacity-30">
          <FormHeader additionalClasses={['text-3xl']} content="You don't have any Todos yet!" />
          <FormHeader additionalClasses={['text-3xl']} content="Add a new one!" />
          <img onClick={openModal} className=" opacity-60 hover:opacity-100 w-[10%] pt-20 -mr-10" src={plus} />
        </div>
      )}
    </div>
  );
};

export default TodoList;
