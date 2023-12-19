const TodoItemTags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className="flex flex-row h-[20%] w-full items-start justify-end mt-3">
      {tags.slice(0, 3).map((tag: string, index: number) => (
        <p key={index} className="font-poppins font-thin text-polynesian_blue-200 dark:text-polynesian_blue-600">
          {'#' + tag.split('')[0]}
        </p>
      ))}
    </div>
  );
};

export default TodoItemTags;
