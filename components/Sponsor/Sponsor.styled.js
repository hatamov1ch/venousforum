import styled from "styled-components";

const StyledSponsor = styled.section`
  width: 95%;
  margin-left: auto;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.background.white};
  display: flex;
  gap: 1em;
  padding: 1em;
  border: 1px solid #eee;
  border-radius: 1.5rem;

  img {
    width: 10rem;
    height: 10rem;
    object-fit: contain;
  }

  .body {
    h3 {
      margin-bottom: 0.25em;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  gap: 1em;
  justify-content: flex-end;
  margin-bottom: 1.5em;

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    padding: 0.25em;
    background: ${({ theme }) => theme.background.primary};
    transition: 300ms ease-in-out;

    &:hover {
      opacity: 0.75;
    }

    .icon {
      color: ${({ theme }) => theme.color.light};
      fill: ${({ theme }) => theme.color.light};
    }
  }
`;

export default StyledSponsor;