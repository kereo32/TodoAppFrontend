import { useDispatch } from 'react-redux';
import { logout } from '../../Store/slices/user';
import useFetchTodoData from '../../Hooks/useFetchTodoData';

const Todo: React.FC = () => {
  const dispatch = useDispatch();
  // const { data, error, loading } = useFetchTodoData(['657cdee985bbc9a1c87c55b8', '657cdd363e179eedd2da262d', '657cdeef85bbc9a1c87c55ba']);

  return (
    <div className="flex flex-nowrap w-full h-full justify-center items-center">
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Todo;
