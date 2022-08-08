import { useState, useEffect } from "react";
import StyledKeyTopics, {
  Content,
  TopicsContainer,
  Title,
  LoaderBtn,
} from "./KeyTopics.styled";
import Topic from "./Topic";

const KeyTopics = ({ topics }) => {
  const [itemsToShow, setItemsToShow] = useState(2);

  const handleLoadAll = () => {
    const { length: topicsTotal } = topics;

    if (itemsToShow >= topicsTotal) return setItemsToShow(2);

    setItemsToShow(topicsTotal);
  };

  return (
    <StyledKeyTopics>
      <div className="container">
        <Content>
          <Title>Ключевые темы форума</Title>

          <TopicsContainer>
            {topics.slice(0, itemsToShow).map((topic) => (
              <Topic key={topic.title.replace(" ", "-")} {...topic} />
            ))}
          </TopicsContainer>

          <LoaderBtn onClick={handleLoadAll}>
            {itemsToShow >= topics.length
              ? "Показать меньше..."
              : "Показать больше..."}
          </LoaderBtn>
        </Content>
      </div>
    </StyledKeyTopics>
  );
};

export default KeyTopics;