import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../constants/types';

const initialState: User = {
  isAuthenticated: false,
  userInformation: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state: User, action: PayloadAction<User['userInformation']>) {
      state.isAuthenticated = true;
      state.userInformation = action.payload;
    },
    logout(state: User) {
      state.isAuthenticated = false;
      state.userInformation = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
