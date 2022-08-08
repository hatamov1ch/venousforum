import styled from "styled-components";

const StyledKeyTopics = styled.section``;

export const Content = styled.div`
  padding: 5em 0;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2em;
`;

export const TopicsContainer = styled.div``;

export const LoaderBtn = styled.button`
  width: 100%;
  text-align: center;
  border: 0;
  margin-top: 2em;
  background: transparent;
  font-weight: 700;
  color: ${({ theme }) => theme.background.primary};
`;

export default StyledKeyTopics;