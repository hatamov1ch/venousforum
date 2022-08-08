import styled from "styled-components";

const Speaker = styled.div`
  text-align: center;

  .image-wrapper {
    width: 20rem;
    height: 20rem;
    margin: 0 auto 1.5em;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(55, 55, 55, 0.15);

    img {
      object-fit: cover;
      object-position: center top;
    }
  }
`;

export const FullName = styled.h3`
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

export const About = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1em;
`;

export const Contacts = styled.address`
  font-style: normal;
`;

export const SocialNetworks = styled.div`
  width: 100%;
  max-width: 12.5rem;
  justify-content: space-between;
  margin: 1.25rem auto 0;
  display: flex;

  svg {
    font-size: 2.5rem;
    color: #ccc;
    fill: #ccc;
    transition: 350ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.background.primary};
      fill: ${({ theme }) => theme.background.primary};
    }
  }
`;

export default Speaker;