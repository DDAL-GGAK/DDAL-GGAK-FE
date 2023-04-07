import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from 'constants/';

export function useNavigateBack() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    const from = location.state?.from;
    if (from) return navigate(from);

    return navigate(ROUTE.HOME);
  };

  return navigateBack;
}
