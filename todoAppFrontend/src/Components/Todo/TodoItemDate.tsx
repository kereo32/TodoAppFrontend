import useIsHovering from '../../Hooks/useIsHovering';

const TodoItemDate: React.FC<{ creationDate: string; lastUpdateDate: string }> = ({ creationDate, lastUpdateDate }) => {
  const { isHovering, handleMouseOver, handleMouseOut } = useIsHovering();
  return (
    <>
      <p onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className="font-poppins font-thin text-polynesian_blue-200 dark:text-polynesian_blue-600">
        {isHovering ? creationDate.split('T')[0] : lastUpdateDate ? lastUpdateDate.split('T')[0] : creationDate.split('T')[0]}
      </p>
    </>
  );
};

export default TodoItemDate;
