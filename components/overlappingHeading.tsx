import tw, { styled } from 'twin.macro';

const OverlappingHeadingStyled = styled.h1`
  ${tw`text-9xl text-blue-800 font-ms italic tracking-negative pl-2`}
  
  span {
    mix-blend-mode: color-dodge;
  }
`;

const OverlappingHeading = (props: { children: string }) => (
  <OverlappingHeadingStyled>
    {props.children.split('').map((child, i) => (
      <span key={i}>{child}</span>
    ))}
  </OverlappingHeadingStyled>
);

export default OverlappingHeading;
