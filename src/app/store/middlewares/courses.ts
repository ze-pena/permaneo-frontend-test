import { getCourses, initCoursesState } from '@/app/store/reducers/courses';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import services from '@/app/services';

export const coursesListener = createListenerMiddleware();

coursesListener.startListening({
  actionCreator: getCourses,
  effect: async (_, { fork, dispatch }) => {
    const task = fork(async () => await services.courses.getCourses());
    const response = await task.result;

    if (response.status === 'ok') {
      dispatch(initCoursesState(response.value));
    }
  },
});
