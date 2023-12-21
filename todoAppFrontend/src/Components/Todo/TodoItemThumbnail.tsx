import placeHolder from '/images/placeholder.jpg';

const TodoItemThumbnail: React.FC<{ thumbnailUrl?: string }> = ({ thumbnailUrl }) => {
  return (
    <div className="flex flex-col w-[30%] h-full justify-center items-center ml-2">
      <img className={`w-full max-h-16 ${thumbnailUrl ? '' : 'mix-blend-multiply'}`} src={thumbnailUrl ? thumbnailUrl : placeHolder} />
    </div>
  );
};

export default TodoItemThumbnail;
