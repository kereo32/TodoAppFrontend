const TodoItemDescription: React.FC<{ description: string }> = ({ description }) => {
  return (
    <>
      <p className="font-poppins font-thin text-polynesian_blue-200 dark:text-polynesian_blue-600 mt-2">
        {description.length > 10 ? description.substring(0, 9) + '...' : description}
      </p>
    </>
  );
};

export default TodoItemDescription;
