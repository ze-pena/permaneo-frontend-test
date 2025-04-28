import { getUser, initUserState } from '@/app/store/reducers/user';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import services from '@/app/services';

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
