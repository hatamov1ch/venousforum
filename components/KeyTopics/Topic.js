import StyledTopic, { Main, Title, Text } from "./Topic.styled";
import Image from "next/image";
import uuid from "react-uuid";

const Topic = ({ title, description, imageURL }) => {
  return (
    <StyledTopic>
      <Main>
        <Title>{title}</Title>

        {description.map((content, index) => (
          <Text key={uuid()}>{content}</Text>
        ))}
      </Main>

      <div className="image-wrapper">
        <Image
          width={1000}
          height={1000}
          layout={"responsive"}
          src={imageURL}
          alt="Вектор"
        />
      </div>
    </StyledTopic>
  );
};

export default Topic;