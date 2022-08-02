import styled from "styled-components";

const StyledBanner = styled.section`
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 90vh;
    height: 45rem;
    background: ${({ theme }) => theme.background.smoke};
    position: absolute;
    top: 0;
    right: -15rem;
    border-radius: 50rem;
    transform: rotate(-75deg);
    z-index: 1;
  }
`;

export const Content = styled.div`
  padding: 7.5em 0 0;
  position: relative;
  z-index: 2;
`;

export const Row = styled.div`
  &.row--1 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Suptitle = styled.span`
  display: block;
  font-size: 2.75rem;
  margin-bottom: 0.5em;
`;

export const Title = styled.h1`
  font-size: 5.5rem;
  line-height: 1.25;
  margin-bottom: 1em;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 3em;
  margin-bottom: 5em;

  li {
    .number {
      display: block;
      font-size: 5rem;
      font-weight: 700;
      line-height: 1.5;
      text-align: center;
    }

    p {
      font-size: 2rem;
    }
  }
`;

export const Main = styled.div`
  width: 70%;

  button {
    padding: 1.25em 2.5em;
    font-size: 1.75rem;
    text-transform: uppercase;
    font-weight: 700;
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.light};
  }
`;

export default StyledBanner;