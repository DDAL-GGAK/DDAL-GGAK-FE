import { ContributionGraph } from 'components/user';
import { useLocation } from 'react-router-dom';
import { REGEX } from 'constants/';

export function MyTicketPage() {
  const { pathname } = useLocation();
  const userId = pathname.match(REGEX.USER_ID)?.[1] || '';
  
  return (
    <div>
      MyTicketPage
      <ContributionGraph userId={userId}/>
    </div>
  );
}
