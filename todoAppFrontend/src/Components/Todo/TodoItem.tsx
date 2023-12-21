import React from 'react';
import { Todo as TodoItemType } from '../../constants/types';

import TodoItemThumbnail from './TodoItemThumbnail';
import TodoItemTitle from './TodoItemTitle';
import TodoItemDescription from './TodoItemDescription';
import TodoItemTags from './TodoItemTags';
import TodoItemDate from './TodoItemDate';
import TodoActionButtons from './TodoActionButtons';

import useModal from '../../Hooks/useModal';
import AddTodoModal from '../Modal/AddTodoModal';

const TodoItem: React.FC<{ data: TodoItemType }> = ({
  data: { _id, thumbnailUrl, title, description, creationDate, lastUpdatedDate, tags, attachmentFileUrl, isActive, timeSpent },
}) => {
  const { openModal, closeModal, ModalComponent } = useModal();
  return (
    <div className="flex flex-row w-[65%] xs:w-full min-h-fit bg-polynesian_blue-800 dark:bg-polynesian_blue-200 mt-2 rounded-lg">
      <ModalComponent
        styleContent={{
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '75%',
          padding: '0',
          margin: '0',
          borderColor: '#3e71af',
          borderRadius: '0.4rem',
          boxShadow: '0 0 0 0.05rem white',
        }}
      >
        <AddTodoModal
          closeModal={closeModal}
          todoToUpdate={{ _id, thumbnailUrl, title, description, creationDate, lastUpdatedDate, tags, attachmentFileUrl, isActive, timeSpent }}
        />
      </ModalComponent>
      <TodoItemThumbnail thumbnailUrl={thumbnailUrl} />
      <div className="flex flex-col w-full h-full justify-start items-start m-2">
        <TodoItemTitle title={title} />
        <TodoItemDescription description={description} />
      </div>
      <div className="flex flex-col w-full h-[90%] items-end justify-between mr-3">
        <div className="flex flex-row h-[20%] w-full items-start justify-end mt-3">
          <TodoItemTags tags={tags} />
        </div>
        <TodoItemDate creationDate={creationDate} lastUpdateDate={lastUpdatedDate} />
      </div>
      <TodoActionButtons openEditModal={openModal} todoId={_id} attachmentFileUrl={attachmentFileUrl} />
    </div>
  );
};

export default TodoItem;
