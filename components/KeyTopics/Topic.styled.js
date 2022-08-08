import styled from "styled-components";

const StyledTopic = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5em;
  border-bottom: 1px solid #ccc;
  margin-bottom: 2em;

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }

  &:nth-child(even) {
    img {
      order: -1;
    }
  }

  &:hover img {
    filter: none;
  }

  img {
    width: 50%;
    filter: grayscale(100%);
    transition: 500ms ease-in-out;
  }
`;

export const Main = styled.div`
  width: 46.5%;
`;

export const Title = styled.h3`
  font-size: 3.5rem;
  margin-bottom: 1em;
`;

export const Text = styled.div`
  font-size: 1.65rem;
  color: #444;
  margin-bottom: 1em;
  line-height: 1.4;
  padding-bottom: 1em;
  border-bottom: 1px solid #ccc;

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }
`;

export default StyledTopic;