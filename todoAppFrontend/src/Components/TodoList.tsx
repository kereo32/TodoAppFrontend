import React from 'react';
import { Todo as TodoItemData } from '../constants/types';
import TodoItem from './TodoItem';
import { FormHeader } from './Form';

const TodoList: React.FC<{ data?: TodoItemData[] }> = ({ data }) => {
  return (
    <div className="flex flex-col w-[40%] h-[80%] justify-start items-center">
      <div className="flex flex-row w-[60%] h-[20%] justify-between items-center">
        <p>tag search</p>
        <FormHeader additionalClasses={['text-3xl']} content="Todo List" />
        <p>title search</p>
      </div>
      <div className="flex flex-col w-[60%] h-[5%] items-end justify-center">
        <p>+</p>
        <p>-</p>
      </div>
      {data?.map((item: TodoItemData, index: number) => (
        <TodoItem key={index} data={item} />
      ))}
    </div>
  );
};

export default TodoList;
