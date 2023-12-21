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
  const attachmentClasses = attachmentFileUrl != '' ? 'cursor-pointer opacity-100 dark:invert' : 'cursor-default opacity-50 dark:invert';
  return (
    <div className="flex flex-col w-[10%] h-full justify-evenly items-center mr-3">
      {attachmentFileUrl != '' ? (
        <a target="_blank" href={attachmentFileUrl}>
          <img className={`${attachmentClasses}`} src={attach} />
        </a>
      ) : (
        <img className={`${attachmentClasses}`} src={attach} />
      )}
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
