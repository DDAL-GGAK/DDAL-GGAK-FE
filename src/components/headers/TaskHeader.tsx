import { DefaultHeader } from 'components/headers';

export function TaskHeader() {
  const pageTitle = 'Task | DDal-GGak';

  return (
    <DefaultHeader>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
    </DefaultHeader>
  );
}
