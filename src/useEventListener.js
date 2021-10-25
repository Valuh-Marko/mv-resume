import { useEffect, useRef } from "react";

const useEventListener = (evenType, handler) => {
  const handlerRef = useRef();

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    function internalHandler(e) {
      return handlerRef.current(e);
    }

    document.addEventListener(evenType, handler);
    return () => document.removeEventListener(evenType, internalHandler);
  }, [evenType]);
};

export default useEventListener;
