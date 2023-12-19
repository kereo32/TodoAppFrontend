const TodoItemTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <h1 className=" font-poppins font-bold text-sm text-polynesian_blue-200 dark:text-polynesian_blue-600 mt-1">
        {title.length > 20 ? title.slice(0, 20) + '...' : title}
      </h1>
    </>
  );
};

export default TodoItemTitle;
