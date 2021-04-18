import Head from 'next/head';
import tw, { styled } from 'twin.macro';

import OverlappingHeading from 'components/overlappingHeading';
import React from 'react';

const HOME_LABEL = 'Coming soon...';

const BlobContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  fill: #ee7f00;
  width: 50vmax;
  z-index: -1;
  animation: move 10s ease-in-out infinite;
  transform-origin: 50% 50%;

  @keyframes move {
    0% {
      transform: scale(1) translate(-20vw, -30vh) rotate(50deg);
    }
    39% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(180deg);
    }
    40% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(180deg);
    }
    79% {
      transform: scale(1.3) translate(10vw, 60vh) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(10vw, 60vh) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(-20vw, -30vh) rotate(50deg);
    }
  }
`;

const Blob = () => (
  <BlobContainer>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
      <path
        d="M166.3,10.8c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8
	c5.3,13.5,10.4,27.1,14.9,40.9c11.8,36.1,45.3,69.2,90.7,65.7c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1
	c14-34.3,20.7-75.6,2.3-111c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5"
      />
    </svg>
  </BlobContainer>
);

const Anchor = ({
  children,
  ...rest
}: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
  <a
    tw="text-red-500 hover:text-blue-800 blend-color-dodge hover:blend-soft-light font-ns font-bold mt-4 mx-2 px-6 md:px-8 py-2.5 border-4 border-red-500 hover:border-blue-800 transition-colors"
    target="_blank"
    {...rest}
  >
    {children}
  </a>
);

export default function Home() {
  return (
    <div tw="h-full flex flex-col justify-center items-center relative">
      <Head>
        <title>{HOME_LABEL}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Blob />
      <OverlappingHeading>{HOME_LABEL}</OverlappingHeading>
      <div tw="flex w-full flex-wrap justify-center">
        <Anchor href="https://www.youtube.com/channel/UCI3L5wHwcpz3jT6KeHfqxFg">Youtube</Anchor>
        <Anchor href="https://www.facebook.com/radiobubbu">Facebook</Anchor>
        <Anchor href="https://www.instagram.com/radiobubbu/">Instagram</Anchor>
        <Anchor href="https://www.twitch.tv/radio_bubbu">Twitch.tv</Anchor>
        <Anchor href="https://t.me/radio_bubbu">Telegram</Anchor>
      </div>
    </div>
  );
}
