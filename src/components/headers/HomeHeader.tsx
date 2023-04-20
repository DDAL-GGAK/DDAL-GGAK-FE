import { DefaultHeader } from './DefaultHeader';

export function HomeHeader() {
  const pageTitle = 'DDal-GGak - Team Task Management';

  return (
    <DefaultHeader>
      <title>DDAL-GGAK</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
    </DefaultHeader>
  );
}
