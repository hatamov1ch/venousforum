import StyledBanner, {
  Content,
  Row,
  Suptitle,
  Title,
  List,
  Main,
} from "./Banner.styled";

import Sponsor from "../Sponsor";
import { Button } from "../../styles/common.styled.js";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="container">
        <Content>
          <Row className="row--1">
            <Main>
              <Suptitle>Международная конференция</Suptitle>
              <Title>
                Второй венозный форум ассоциации флебологов Узбекистана
              </Title>

              <List>
                <li>
                  <span className="number">
                    <CountUp start={0} end={40} />+
                  </span>
                  <p>Приглашенных спикеров</p>
                </li>
                <li>
                  <span className="number">
                    <CountUp start={0} end={7} />+
                  </span>
                  <p>Тематических секций</p>
                </li>
                <li>
                  <span className="number">
                    <CountUp start={0} end={50} />+
                  </span>
                  <p>Научных работ</p>
                </li>
                <li>
                  <span className="number">
                    <CountUp start={0} end={500} />+
                  </span>
                  <p>Ожидаемых участников</p>
                </li>
              </List>

              <Button>Подача тезисов</Button>
            </Main>
          </Row>

          <Row className="row--2">
            <Sponsor />
          </Row>
        </Content>
      </div>
    </StyledBanner>
  );
};

export default Banner;