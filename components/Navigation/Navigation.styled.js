import styled from "styled-components";

const StyledNavigation = styled.nav`
  color: ${({ theme }) => theme.color.dark};
  margin-right: auto;
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;

  li {
    height: 100%;
    position: relative;

    a {
      height: 100%;
      padding: 1em 1.25em;
      text-decoration: none;
      display: flex;
      align-items: center;
      color: inherit;
      transition: 250ms;
      position: relative;

      &.active,
      &:hover {
        color: ${({ theme }) => theme.color.light};
        background: ${({ theme }) => theme.background.primary};
      }
    }

    &:hover .dropdown {
      height: auto;
      pointer-events: all;

      &__item {
        opacity: 1;
      }
    }
  }
`;

export const Dropdown = styled.div`
  pointer-events: none;
  background: ${({ theme }) => theme.background.white};
  position: absolute;
  min-width: 20rem;
  top: 100%;
  height: 0;
  width: 100%;
  box-shadow: 0 3px 5px -3px rgba(125, 125, 125, 0.25);
  border: 1px solid #eee;

  .dropdown__item {
    opacity: 0;
    padding: 1rem 1.25em;
    font-size: 1.5rem;
    text-transform: capitalize;
    border-bottom: 1px solid #eee;
    transition: initial;

    &:last-child {
      border: 0;
    }
  }
`;

export default StyledNavigation;