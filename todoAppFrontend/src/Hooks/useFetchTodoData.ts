import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Todo } from '../constants/types';
import { logout } from '../Store/slices/user';
import { useDispatch } from 'react-redux';

interface ApiResponse {
  todoItems?: Todo[];
  message?: string;
}

const useFetchTodoData = (todoIds: string[]) => {
  const [data, setData] = useState<Todo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('todoAppToken');

        if (!token) {
          dispatch(logout());
          return;
        }
        const response = await axios.post(
          'http://localhost:8585/todo/batch',
          { todoIds },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData: ApiResponse = response.data;
        setData(responseData.todoItems || []);
      } catch (error: any) {
        setError(error.response?.data.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetchTodoData;
