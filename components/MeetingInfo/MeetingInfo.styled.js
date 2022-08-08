import styled from "styled-components";

const StyledMeetingInfo = styled.section`
  border-top: 1px solid #eee;
  background: linear-gradient(
      rgba(255, 255, 255, 0.93),
      rgba(255, 255, 255, 0.99)
    ),
    url("https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      top / cover no-repeat,
    ${({ theme }) => theme.background.smoke};
`;

export const Content = styled.div`
  padding: 5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.dark};
`;

export const Title = styled.h2`
  margin-bottom: 0.5em;
`;

export const Main = styled.div`
  width: 45%;

  p {
    line-height: 1.4;
  }

  address {
    font-style: normal;
    margin-top: 2em;
  }
`;

export const Location = styled.p`
  font-size: 2rem;
  margin-bottom: 2em;
`;

export const Time = styled.div`
  h4 {
    margin-bottom: 0.5em;
  }

  p {
    font-size: 2rem;
  }
`;

export const GoogleMap = styled.div`
  width: 50%;
  align-self: stretch;

  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
  }
`;

export default StyledMeetingInfo;