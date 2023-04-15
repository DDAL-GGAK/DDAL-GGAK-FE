import { useEffect, RefObject } from 'react';

type RefType = RefObject<HTMLElement>;
interface UseOutsideClickProps {
  ref: RefType;
  callback: () => void;
  isOpen: boolean;
}

export const useOutsideClick = ({
  ref,
  callback,
  isOpen,
}: UseOutsideClickProps) => {
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, ref, callback]);
};
