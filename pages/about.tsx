import Head from 'next/head';

import OverlappingHeading from 'components/overlappingHeading';

const ABOUT_LABEL = 'About';

export default function About() {
  return (
    <div>
      <Head>
        <title>{ABOUT_LABEL}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OverlappingHeading>{ABOUT_LABEL}</OverlappingHeading>
    </div>
  );
}
