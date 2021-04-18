import { pipe, split } from 'ramda';
import { mapIndexed } from 'ramda-adjunct';

import tw, { styled } from 'twin.macro';

const OverlappingHeadingStyled = styled.h1`
  ${tw`text-9xl text-blue-800 font-ms italic tracking-negative pl-2`}

  span {
    mix-blend-mode: color-dodge;
  }
`;

const OverlappingHeading = (props: { children: string }) => (
  <OverlappingHeadingStyled>
    {pipe(
      split(''),
      mapIndexed((c, i) => <span key={i}>{c}</span>)
    )(props.children)}
  </OverlappingHeadingStyled>
);

export default OverlappingHeading;
