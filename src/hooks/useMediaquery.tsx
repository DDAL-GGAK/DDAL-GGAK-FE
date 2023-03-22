import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const isMatch = (mediaQuery: string): boolean =>
    window.matchMedia(mediaQuery).matches;
  const [matches, setMatches] = useState<boolean>(isMatch(query));
  const handleChange = () => setMatches(isMatch(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

export default useMediaQuery;
