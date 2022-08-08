import StyledKeyTopics, {
  Content,
  TopicsContainer,
  Title,
} from "./KeyTopics.styled";
import Topic from "./Topic";

const KeyTopics = () => {
  return (
    <StyledKeyTopics>
      <div className="container">
        <Content>
          <Title>Ключевые темы форума</Title>

          <TopicsContainer>
            <Topic />
          </TopicsContainer>
        </Content>
      </div>
    </StyledKeyTopics>
  );
};

export default KeyTopics;