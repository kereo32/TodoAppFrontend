import { useSelector } from 'react-redux';
import useFetchTodoData from '../../Hooks/useFetchTodoData';
import Loading from '../../Components/Loading';
import { StoreState } from '../../constants/types';
import TodoList from '../../Components/TodoList';

const Todo: React.FC = () => {
  const todoItems = useSelector((state: StoreState) => state.user.userInformation?.todoItems);
  const { isLoading, data } = useFetchTodoData(todoItems);

  return <div className="flex flex-nowrap w-full h-full justify-center items-center">{data.length == 0 ? <Loading /> : <TodoList data={data} />}</div>;
};

export default Todo;
