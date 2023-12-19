import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItemToUserTodoArray, removeItemFromUserTodoArray, updateTodoInState } from '../Store/slices/user';
import { StoreState, Todo } from '../constants/types';

const useAddNewTodoData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { userInformation } = useSelector((state: StoreState) => state.user);

  const addNewTodo = async (data: Todo) => {
    try {
      setLoading(true);
      const response = await fetch('https://todoserver-febeca6a6960.herokuapp.com/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('todoAppToken')}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      } else {
        const responseData = await response.json();
        const todoId = responseData.todoId;

        await fetch('https://todoserver-febeca6a6960.herokuapp.com/todo/addtodoidtouser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cookies.get('todoAppToken')}`,
          },
          body: JSON.stringify({ todoId, userId: userInformation?.userId }),
        }).then(() => {
          dispatch(addNewItemToUserTodoArray(todoId));
        });
      }

      setError(null);
    } catch (error) {
      setError('Error adding todo');
    } finally {
      setLoading(false);
    }
  };

  const removeTodo = async (todoId: string) => {
    try {
      setLoading(true);
      const response = await fetch('https://todoserver-febeca6a6960.herokuapp.com/todo/removetodoidfromuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('todoAppToken')}`,
        },
        body: JSON.stringify({ todoId, userId: userInformation?.userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to remove todo');
      }

      setError(null);
    } catch (error) {
      setError('Error removing todo');
    } finally {
      dispatch(removeItemFromUserTodoArray(todoId));
      setLoading(false);
    }
  };
  const updateTodo = async (todoId: string, data: Todo) => {
    console.log(todoId, data);
    try {
      setLoading(true);
      const response = await fetch(`https://todoserver-febeca6a6960.herokuapp.com/todo/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('todoAppToken')}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
      const updatedTodo = await response.json();
      console.log('updatedTodo : ', updatedTodo.todo);
      dispatch(updateTodoInState(updatedTodo.todo));
      setError(null);
    } catch (error) {
      setError('Error updating todo');
    } finally {
      setLoading(false);
    }
  };

  return { addNewTodo, loading, error, removeTodo, updateTodo };
};

export default useAddNewTodoData;
