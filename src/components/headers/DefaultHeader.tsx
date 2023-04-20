import { Helmet } from 'react-helmet';
import { HEADER } from 'constants/';

interface DefaultHeaderProps {
  children: React.ReactNode;
}

export function DefaultHeader({ children }: DefaultHeaderProps) {
  return (
    <Helmet>
      {children} <meta name="description" content={HEADER.DESCRIPTION} />
      <meta property="og:description" content={HEADER.DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={HEADER.PAGE_URL} />
      <meta property="og:image" content={HEADER.THUMBNAIL_URL} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={HEADER.DESCRIPTION} />
      <meta name="twitter:image" content={HEADER.THUMBNAIL_URL} />
      <link rel="canonical" href={HEADER.PAGE_URL} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={HEADER.THUMBNAIL_URL}
      />
    </Helmet>
  );
}
