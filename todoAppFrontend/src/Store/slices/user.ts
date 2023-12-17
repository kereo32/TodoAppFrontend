import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../constants/types';

const storedUserInformation = localStorage.getItem('userInformation');

const initialState: User = {
  isAuthenticated: !!storedUserInformation,
  userInformation: storedUserInformation ? JSON.parse(storedUserInformation) : null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state: User, action: PayloadAction<User['userInformation']>) {
      state.isAuthenticated = true;
      state.userInformation = action.payload;

      localStorage.setItem('userInformation', JSON.stringify(action.payload));
    },
    logout(state: User) {
      state.isAuthenticated = false;
      state.userInformation = null;

      localStorage.removeItem('userInformation');
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
