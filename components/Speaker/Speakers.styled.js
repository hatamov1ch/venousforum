import styled from "styled-components";

const StyledSpeaker = styled.section`
  background: ${({ theme }) => theme.background.smoke};
`;

export const Content = styled.div`
  padding: 5em 0;
  color: ${({ theme }) => theme.color.dark};
`;

export const Title = styled.h2`
  margin-bottom: 0.5em;
  text-align: center;
`;

export const AllSpeakers = styled.div``;

export default StyledSpeaker;