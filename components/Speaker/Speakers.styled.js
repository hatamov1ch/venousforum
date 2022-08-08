import styled from "styled-components";

const StyledSpeaker = styled.section`
  background: url("/dots.png") bottom 25rem right 12.5rem / 10rem no-repeat,
    url("/dots.png") top 25rem left 12.5rem / 10rem no-repeat,
    ${({ theme }) => theme.background.smoke};
`;

export const Content = styled.div`
  padding: 5em 0;
  color: ${({ theme }) => theme.color.dark};
`;

export const Title = styled.h2`
  margin-bottom: 1.75em;
  text-align: center;
`;

export const SpeakersContainer = styled.div`
  position: relative;
`;

export const Controllers = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  background: red;
  transform: translate(-50%, -50%);
  margin-top: 3%;

  .arrow {
    display: flex;
    font-size: 4.5rem;
    transition: 300ms ease-in-out;
    position: absolute;
    z-index: 2;

    &--previous {
      left: -2.5rem;
    }

    &--next {
      right: -2.5rem;
    }

    &:hover {
      opacity: 0.75;
    }

    .icon {
      color: ${({ theme }) => theme.background.primary};
      fill: ${({ theme }) => theme.background.primary};
    }
  }
`;

export default StyledSpeaker;