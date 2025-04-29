import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserCourse, UserFavorite } from '@/app/interfaces/User';

type IUserState = {
  user: User;
};

const initialState: IUserState = {
  user: {
    id: 0,
    name: '',
    courses: [],
    favorites: [],
  },
};

export const getUser = createAction('user/getUser');

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUserState: (state, action: PayloadAction<User>) => {
      Object.assign(state, { user: action.payload, isLoading: false });
    },
    userBuyCourse: (state, action: PayloadAction<UserCourse>) => {
      state.user.courses.push(action.payload);
    },
    userFavoriteCourse: (state, action: PayloadAction<UserFavorite>) => {
      const stateIndex = state.user.favorites.findIndex(
        favorite => favorite.courseId === action.payload.courseId
      );

      if (stateIndex > -1) {
        state.user.favorites.splice(stateIndex, 1);
        return;
      }

      state.user.favorites.push(action.payload);
    },
  },
});

export const { initUserState, userBuyCourse, userFavoriteCourse } = userSlice.actions;
export default userSlice.reducer;
