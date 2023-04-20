import { DefaultHeader } from 'components/headers';

export function ProjectHeader() {
  const pageTitle = 'Project | DDal-GGak';

  return (
    <DefaultHeader>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
    </DefaultHeader>
  );
}
