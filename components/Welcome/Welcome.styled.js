import styled from "styled-components";

const StyledWelcome = styled.section`
  background: url("/dots.png") top 2rem right 37.5rem / 10rem no-repeat,
    url("/dots.png") bottom 15rem left 10rem / 10rem no-repeat,
    url("/doctor.png") bottom right / 50rem no-repeat;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    width: 50rem;
    height: 100rem;
    border-radius: 50rem;
    background: ${({ theme }) => theme.background.smoke};
    position: absolute;
    right: -15rem;
    top: 10rem;
    transform: rotate(-36deg);
    z-index: -1;
  }
`;

export const Content = styled.div`
  padding: 0 0 5em;
  width: 100%;
  max-width: 100ch;
  color: ${({ theme }) => theme.color.dark};
`;

export const Title = styled.h2`
  margin-bottom: 0.35em;
`;

export const Text = styled.p`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #444;
`;

export const Regards = styled.div`
  margin-top: 5em;

  p {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledWelcome;