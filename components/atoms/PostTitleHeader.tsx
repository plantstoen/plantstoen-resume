import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  margin?: string;
};

const PostTitleHeaderStyle = styled.h1`
  font-size: 6.25rem;
  font-weight: bold;
  text-align: left;
  line-height: 1;
  letter-spacing: -0.04em;
  margin: ${(props) => props.margin};
`;

const PostTitleHeader = ({ children, margin }: Props) => {
  return (
    <PostTitleHeaderStyle margin={margin}>{children}</PostTitleHeaderStyle>
  );
};

export default PostTitleHeader;
