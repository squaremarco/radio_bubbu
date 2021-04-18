import Head from 'next/head';

import OverlappingHeading from 'components/overlappingHeading';
import BubuIcon from 'components/bubuIcon';

const HOME_LABEL = 'Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{HOME_LABEL}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OverlappingHeading>{HOME_LABEL}</OverlappingHeading>
      <BubuIcon />
    </div>
  );
}
