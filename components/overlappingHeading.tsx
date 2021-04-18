import { pipe, split } from 'ramda';
import { mapIndexed } from 'ramda-adjunct';
import tw, { styled } from 'twin.macro';

import { ChildrenProps, DirectionProps } from 'types/base';

const OverlappingHeadingStyled = styled.h1<DirectionProps>`
  ${tw`text-9xl text-red-500 font-ms italic`}
  span {
    ${tw`tracking-tighter blend-color-dodge`}
  }
`;

const OverlappingHeading = ({ direction = 'horizontal', children }: DirectionProps & ChildrenProps) => (
  <OverlappingHeadingStyled direction={direction}>
    {pipe(
      split(''),
      mapIndexed((c, i) => <span key={i}>{c}</span>)
    )(children)}
  </OverlappingHeadingStyled>
);

export default OverlappingHeading;
