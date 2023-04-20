import { DefaultHeader } from 'components/headers';

export function SignUpHeader() {
  const pageTitle = 'Sign Up | DDal-GGak';

  return (
    <DefaultHeader>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
    </DefaultHeader>
  );
}
