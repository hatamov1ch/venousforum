import StyledTopic, { Main, Title, Text } from "./Topic.styled";

const Topic = ({ title, description, imageURL }) => {
  return (
    <StyledTopic>
      <Main>
        <Title>{title}</Title>

        {description.map((content) => (
          <Text>{content}</Text>
        ))}
      </Main>

      <img src={imageURL} alt="Вектор" />
    </StyledTopic>
  );
};

export default Topic;