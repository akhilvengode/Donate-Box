import { useEffect, useRef } from "react";

export const useUpdateEffect = (
  callback: () => any,
  dependancy?: Array<any>
) => {
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependancy && [...dependancy]);
};
