import useFetchTodoData from '../../Hooks/useFetchTodoData';
import Loading from '../../Components/Loading';
import TodoList from '../../Components/Todo/TodoList';

const Todo: React.FC = () => {
  const { loading, data } = useFetchTodoData();

  return <div className="flex flex-nowrap w-full h-full justify-center items-center">{loading ? <Loading /> : <TodoList data={data} />}</div>;
};

export default Todo;
