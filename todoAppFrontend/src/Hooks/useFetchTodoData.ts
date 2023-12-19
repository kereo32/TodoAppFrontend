import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { logout } from '../Store/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import { Todo, StoreState } from '../constants/types';

interface ApiResponse {
  todoItems: Todo[];
  message?: string;
}

const useFetchTodoData = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Todo[]>([]);
  const todoIds = useSelector((state: StoreState) => state.user.userInformation?.todoIds);
  const userInfo = useSelector((state: StoreState) => state.user.userInformation);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('todoAppToken');

        if (!token) {
          dispatch(logout());
          return;
        }

        const response: AxiosResponse<ApiResponse> | void = await axios
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
            if (error.response && error.response.status === 401) {
              dispatch(logout());
            }
          });

        if (response && response.data) {
          const responseData: ApiResponse = response.data;
          setData(responseData.todoItems);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.response?.data.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userInfo]);

  return { error, loading, data };
};

export default useFetchTodoData;
