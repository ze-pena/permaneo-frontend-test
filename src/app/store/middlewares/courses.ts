import {
  setLoading,
  getCourses,
  initCoursesState,
  getSelectedCourse,
  setSelectedCourse,
} from '@/app/store/reducers/courses';

import { createListenerMiddleware } from '@reduxjs/toolkit';

import { RootState } from '../store';

import services from '@/app/services';

export const coursesListener = createListenerMiddleware();

coursesListener.startListening({
  actionCreator: getCourses,
  effect: async (_, { fork, dispatch, getState, unsubscribe }) => {
    dispatch(setLoading(true));

    const {
      user: { user },
    } = getState() as RootState;

    const task = fork(async () => await services.courses.getCourses());
    const response = await task.result;

    if (response.status === 'ok') {
      const state = response.value.map(course => {
        const is_purchased = user.courses.some(userCourse => userCourse.courseId === course.id);
        const is_favorite = user.favorites.some(
          userFavorite => userFavorite.courseId === course.id
        );
        const video_progress = 0;
        return { ...course, is_purchased, is_favorite, video_progress };
      });

      dispatch(initCoursesState(state));
      unsubscribe();
    }
  },
});

coursesListener.startListening({
  actionCreator: getSelectedCourse,
  effect: async (action, { fork, dispatch, getState }) => {
    dispatch(setLoading(true));

    const paramCourseId = action.payload;
    const {
      user: { user },
      courses: { courses },
    } = getState() as RootState;

    if (!courses.length) {
      const task = fork(async () => await services.courses.getCourses());
      const response = await task.result;

      if (response.status === 'ok') {
        const state = response.value.map(course => {
          const is_purchased = user.courses.some(userCourse => userCourse.courseId === course.id);
          const is_favorite = user.favorites.some(
            userFavorite => userFavorite.courseId === course.id
          );
          const video_progress = 0;
          return { ...course, is_purchased, is_favorite, video_progress };
        });

        dispatch(initCoursesState(state));
      }
    }

    const courseSelectedState = courses.find(course => course.id === paramCourseId) || null;
    dispatch(setSelectedCourse(courseSelectedState));
  },
});
