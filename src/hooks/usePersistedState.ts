import { parseCookies, setCookie } from "nookies";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const { [`@bookshelf:${key}`]: storageValue } = parseCookies();

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setCookie(undefined, `@bookshelf:${key}`, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
