import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Todo } from '../../constants/types';
import Cookies from 'js-cookie';

const userInformationFromLocalStorage = localStorage.getItem('userInformation');

const initialState: User = {
  isAuthenticated: Cookies.get('todoAppToken') ? true : false,
  userInformation: userInformationFromLocalStorage ? JSON.parse(userInformationFromLocalStorage) : null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state: User, action: PayloadAction<User['userInformation']>) {
      console.log(action.payload);
      state.isAuthenticated = true;
      state.userInformation = action.payload;

      localStorage.setItem('userInformation', JSON.stringify(action.payload));
    },
    logout(state: User) {
      state.isAuthenticated = false;
      state.userInformation = null;

      Cookies.remove('todoAppToken');
      localStorage.removeItem('userInformation');
    },
    addNewItemToUserTodoArray(state: User, action: PayloadAction<string>) {
      if (state.userInformation) {
        state.userInformation.todoIds.push(action.payload);
      }

      localStorage.setItem('userInformation', JSON.stringify(state.userInformation));
    },
    removeItemFromUserTodoArray(state: User, action: PayloadAction<string>) {
      if (state.userInformation) {
        state.userInformation.todoIds = state.userInformation.todoIds.filter((todoId: string) => todoId !== action.payload);
      }

      localStorage.setItem('userInformation', JSON.stringify(state.userInformation));
    },
    updateTodoInState(state: User, action: PayloadAction<Todo>) {
      if (state.userInformation) {
        state.userInformation.todoIds = state.userInformation.todoIds.map((todo: string) => (todo === action.payload._id ? action.payload._id : todo));
      }

      localStorage.setItem('userInformation', JSON.stringify(state.userInformation));
    },
  },
});

export const { loginSuccess, logout, addNewItemToUserTodoArray, removeItemFromUserTodoArray, updateTodoInState } = userSlice.actions;
export default userSlice.reducer;
