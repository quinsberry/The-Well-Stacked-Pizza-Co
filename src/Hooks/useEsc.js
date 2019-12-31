import { useEffect } from 'react';

export function useTitle({ esc, setOpenFood }) {
  useEffect(() => {
    if (esc) {
      setOpenFood();
    }
    return;
  });
}