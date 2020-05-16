import { useCallback, useEffect, useRef } from 'react';

const useAnimationFrame = (callback: Function) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - (previousTimeRef.current || 0);
        callback(deltaTime);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      previousTimeRef.current = time;
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback]
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    requestRef.current = requestAnimationFrame(animate);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]); // Make sure the effect runs only once
};

export default useAnimationFrame;
