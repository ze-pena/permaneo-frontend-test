import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/app/interfaces/User';

interface IUserState {
  isLoading: boolean;
  user: User;
}

const initialState: IUserState = {
  isLoading: false,
  user: {
    id: 0,
    name: '',
    courses: [],
  },
};

export const getUser = createAction('user/getUser');

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initUserState: (state, action: PayloadAction<User>) => {
      return Object.assign(state, { user: action.payload, isLoading: false });
    },
  },
});

export const { initUserState } = userSlice.actions;
export default userSlice.reducer;
