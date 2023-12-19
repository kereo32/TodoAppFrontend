import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { logout } from '../Store/slices/user';
import { useDispatch } from 'react-redux';
import { Todo } from '../constants/types';

interface ApiResponse {
  todoItems?: Todo[];
  message?: string;
}

const useFetchTodoData = (todoIds: string[]) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Todo[]>([]);
  const dispatch = useDispatch();

  const findTodoById = (todoId: string): Todo | undefined => {
    return data.find((todo) => todo._id === todoId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('todoAppToken');

        if (!token) {
          dispatch(logout());
          return;
        }

        const response = await axios
          .post(
            'http://localhost:8585/todo/batch',
            { todoIds },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .catch((error) => {
            if (error.response.status === 401) {
              dispatch(logout());
            }
          });

        const responseData: ApiResponse = response.data;
        setData(responseData.todoItems);
      } catch (error: any) {
        setError(error.response?.data.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, todoIds]);

  return { error, loading, data, findTodoById };
};

export default useFetchTodoData;
