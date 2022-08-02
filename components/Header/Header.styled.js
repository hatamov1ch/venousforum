import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.background.smoke};
  box-shadow: 0 3px 10px -3px rgba(55, 55, 55, 0.3);
  position: relative;
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon {
      font-size: 2.5rem;
    }
  }
`;

export const Register = styled.button`
  padding: 0.5em 2em;
  margin-left: 3.5em;
  border: 0;
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.light};
  transition: 300ms ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    opacity: 0.9;
  }

  .icon {
    font-size: 2.25rem;
  }
`;

export default StyledHeader;