import { useStore } from 'react-redux'
import { useEffect } from 'react'

export const useResetForm = (reset) => {
  const store = useStore();

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogOut;

    return store.subscribe(() => {
      let previousWasLogOut = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogOut;

      if (currentWasLogout !== previousWasLogOut) {
        reset();
      }
    });
  }, [reset, store]);
};