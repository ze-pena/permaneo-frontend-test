import { configureStore } from '@reduxjs/toolkit';

import userSlice from './reducers/user';
import coursesSlice from './reducers/courses';

import { userListener } from './middlewares/user';
import { coursesListener } from './middlewares/courses';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      courses: coursesSlice,
    },
    middleware: getDeFaultMiddleware =>
      getDeFaultMiddleware().prepend(userListener.middleware, coursesListener.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
