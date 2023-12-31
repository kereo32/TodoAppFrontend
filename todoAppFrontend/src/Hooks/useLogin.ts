import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../Store/slices/user';
import Cookies from 'js-cookie';

interface LoginCredentials {
  username: string;
  password: string;
}

interface UseLoginHook {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: LoginCredentials) => Promise<void>;
  error: string | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const useLogin = (): UseLoginHook => {
  const [error, setError] = useState<string | null>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      setError(null);
      setLoading(true);
      const response: AxiosResponse = await axios.post('https://todoserver-febeca6a6960.herokuapp.com/auth/login', credentials);

      Cookies.set('todoAppToken', response.data.token, { expires: 1 });
      dispatch(loginSuccess(response.data.user));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as { response: { data: { message: string } } };
        setError(axiosError.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials: LoginCredentials): Promise<void> => {
    try {
      setError(null);
      setLoading(true);
      const response: AxiosResponse = await axios.post('https://todoserver-febeca6a6960.herokuapp.com/auth/register', credentials);

      Cookies.set('todoAppToken', response.data.token, { expires: 1 });

      dispatch(loginSuccess(response.data.user));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as { response: { data: { message: string } } };
        setError(axiosError.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, error, register, loading, setLoading };
};

export default useLogin;
