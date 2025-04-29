'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

import { initUserState } from './reducers/user';
import { User } from '../interfaces/User';

interface Props extends React.PropsWithChildren {
  user: User;
}

export default function StoreProvider({ user, children }: Props) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initUserState(user));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
