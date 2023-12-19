import attach from '/images/attach.png';
import edit from '/images/edit.png';
import deleteIcon from '/images/deleteIcon.png';
import useAddNewTodoData from '../../Hooks/useAddNewTodoData';

const TodoActionButtons: React.FC<{ todoId: string; attachmentFileUrl: string; openEditModal: () => void }> = ({
  todoId,
  attachmentFileUrl,
  openEditModal,
}) => {
  const { removeTodo } = useAddNewTodoData();

  return (
    <div className="flex flex-col w-[10%] h-full justify-evenly items-center mr-3">
      <a target="_blank" href={attachmentFileUrl}>
        <img className="dark:invert" src={attach} />
      </a>
      <button onClick={openEditModal}>
        <img className="dark:invert" src={edit} />
      </button>
      <button
        onClick={() => {
          removeTodo(todoId);
        }}
      >
        <img className="dark:invert" src={deleteIcon} />
      </button>
    </div>
  );
};

export default TodoActionButtons;
