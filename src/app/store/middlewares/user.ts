import {
  getUser,
  initUserState,
  userBuyCourse,
  userFavoriteCourse,
} from '@/app/store/reducers/user';

import { createListenerMiddleware } from '@reduxjs/toolkit';

import { RootState } from '../store';

import services from '@/app/services';
import { initCoursesState, setSelectedCourse } from '../reducers/courses';
import { StateCourse } from '@/app/interfaces/Courses';

export const userListener = createListenerMiddleware();

userListener.startListening({
  actionCreator: getUser,
  effect: async (_, { fork, dispatch }) => {
    const task = fork(async () => await services.user.getUser());
    const response = await task.result;

    if (response.status === 'ok') {
      dispatch(initUserState(response.value));
    }
  },
});

userListener.startListening({
  actionCreator: userBuyCourse,
  effect: async ({ payload: { courseId } }, { dispatch, getState }) => {
    const {
      user: { user },
      courses: { courses },
    } = getState() as RootState;

    let selectedCourseState: StateCourse | null = null;
    const coursesState = courses.map(course => {
      const is_purchased = user.courses.some(userCourse => userCourse.courseId === course.id);
      const is_favorite = user.favorites.some(userFavorite => userFavorite.courseId === course.id);
      const courseMapped = { ...course, is_purchased, is_favorite };

      if (course.id === courseId) {
        selectedCourseState = courseMapped;
      }

      return courseMapped;
    });

    dispatch(initCoursesState(coursesState));
    dispatch(setSelectedCourse(selectedCourseState));
  },
});

userListener.startListening({
  actionCreator: userFavoriteCourse,
  effect: async ({ payload: { courseId } }, { dispatch, getState }) => {
    const {
      user: { user },
      courses: { courses },
    } = getState() as RootState;

    let selectedCourseState: StateCourse | null = null;
    const coursesState = courses.map(course => {
      const is_purchased = user.courses.some(userCourse => userCourse.courseId === course.id);
      const is_favorite = user.favorites.some(userFavorite => userFavorite.courseId === course.id);
      const courseMapped = { ...course, is_purchased, is_favorite };

      if (course.id === courseId) {
        selectedCourseState = courseMapped;
      }

      return courseMapped;
    });

    dispatch(initCoursesState(coursesState));
    dispatch(setSelectedCourse(selectedCourseState));
  },
});
