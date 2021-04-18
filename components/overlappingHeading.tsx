import tw, { styled } from 'twin.macro';

import { ChildrenProps, DirectionProps } from 'types/base';

const OverlappingHeadingStyled = styled.h1<DirectionProps>`
  ${tw`text-8xl md:text-9xl text-center text-red-500 font-ms italic tracking-tighter blend-color-dodge`}
`;

const OverlappingHeading = ({ direction = 'horizontal', children }: DirectionProps & ChildrenProps) => (
  <OverlappingHeadingStyled direction={direction}>{children}</OverlappingHeadingStyled>
);

export default OverlappingHeading;
