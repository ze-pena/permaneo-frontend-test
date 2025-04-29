import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateCourse } from '@/app/interfaces/Courses';

type ICourseState = {
  isLoading: boolean;
  courses: StateCourse[];
  courseSelected: StateCourse | null;
};

type VideoProgress = {
  courseId: number;
  videoProgress: number;
};

const initialState: ICourseState = {
  isLoading: false,
  courses: [],
  courseSelected: null,
};

export const getCourses = createAction('courses/getCourses');
export const getSelectedCourse = createAction<number>('courses/getSelectedCourse');

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    initCoursesState: (state, action: PayloadAction<StateCourse[]>) => {
      Object.assign(state, { courses: [...action.payload], isLoading: false });
    },
    setSelectedCourse: (state, action: PayloadAction<StateCourse | null>) => {
      Object.assign(state, { courseSelected: { ...action.payload }, isLoading: false });
    },
    setVideoProgress: (state, action: PayloadAction<VideoProgress>) => {
      const courseIndex = state.courses.findIndex(course => course.id === action.payload.courseId);

      if (courseIndex > -1) {
        state.courses[courseIndex].video_progress = action.payload.videoProgress;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { initCoursesState, setSelectedCourse, setVideoProgress, setLoading } =
  coursesSlice.actions;
export default coursesSlice.reducer;
