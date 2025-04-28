import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Courses } from '@/app/interfaces/Courses';

interface ICourseState {
  isLoading: boolean;
  courses: Courses[];
}

const initialState: ICourseState = {
  isLoading: true,
  courses: [],
};

export const getCourses = createAction('courses/getCourses');

const coursesSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initCoursesState: (state, action: PayloadAction<Courses>) => {
      return Object.assign(state, { courses: action.payload, isLoading: false });
    },
  },
});

export const { initCoursesState } = coursesSlice.actions;
export default coursesSlice.reducer;
