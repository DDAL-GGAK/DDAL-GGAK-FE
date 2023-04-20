import { DefaultHeader } from 'components/headers';

export function HomeHeader() {
  const pageTitle = 'DDal-GGak - Team Task Management';

  return (
    <DefaultHeader>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
    </DefaultHeader>
  );
}
