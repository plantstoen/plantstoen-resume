import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

const PostTitleHeaderStyle = styled.h1`
  font-size: 6.25rem;
  font-weight: bold;
  text-align: left;
  line-height: 1;
  letter-spacing: -0.04em;
`;

const PostTitle = ({ children }: Props) => {
  return <PostTitleHeaderStyle style={{}}>{children}</PostTitleHeaderStyle>;
};

export default PostTitle;
