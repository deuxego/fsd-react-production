import { RefObject, useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, cb: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      !ref.current?.contains(target) && cb();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, cb]);
};
