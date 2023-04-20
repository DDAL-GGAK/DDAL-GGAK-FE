import { Helmet } from 'react-helmet';

interface DefaultHeaderProps {
  children: React.ReactNode;
}

export function DefaultHeader({ children }: DefaultHeaderProps) {
  const pageDescription =
    'Manage team tasks, issue tickets, and earn points with DDal-GGak!';
  const pageUrl = 'https://ddal-ggak-fe.vercel.app/';
  const thumbnailUrl = '/thumbnail.png';

  return (
    <Helmet>
      {children} <meta name="description" content={pageDescription} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={thumbnailUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={thumbnailUrl} />
      <link rel="canonical" href={pageUrl} />
      <link rel="icon" type="image/png" sizes="32x32" href={thumbnailUrl} />
    </Helmet>
  );
}
