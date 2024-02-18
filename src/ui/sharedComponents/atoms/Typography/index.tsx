import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ITypography
  extends HTMLAttributes<HTMLHtmlElement | HTMLHeadingElement> {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small" | "tiny";
}

const h1 = styled.h1`
  font-size: 60px;
`;
const h2 = styled.h2`
  font-size: 48px;
`;
const h3 = styled.h3`
  font-size: 32px;
`;
const h4 = styled.h4`
  font-size: 24px;
`;

const h5 = styled.h5`
  font-size: 20px;
`;
const p = styled.p`
  font-size: 16px;
  font-variation-settings: "wght" 400;
`;
const small = styled.p`
  font-size: 12px;
  font-variation-settings: "wght" 400;
`;
const tiny = styled.p`
  font-size: 10px;
  font-variation-settings: "wght" 400;
`;
const Store: any = {
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  small,
  tiny,
};
export const Typography = ({ variant, ...props }: ITypography) => {
  const Element = Store[variant];

  return <Element {...(props as any)} />;
};
