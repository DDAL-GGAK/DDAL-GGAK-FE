import { useLocation, useNavigate } from 'react-router-dom';

export function useNavigateBack() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    const from = location.state?.from;
    if (from) return navigate(from);

    return navigate('/');
  };

  return navigateBack;
}
