import StyledHeader, { Content, Logo, Info, Register } from "./Header.styled";
import Navigation from "../Navigation";

// react icons
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Content>
          <Navigation />

          <Info>
            <a>
              <MdOutlineMail className="icon" />
              venozforum@yandex.ru
            </a>

            <a>
              <MdCall className="icon" />
              +898(99) 900-43-34
            </a>
          </Info>

          <Register>
            Регистрация
            <FiUserCheck className="icon" />
          </Register>
        </Content>
      </div>
    </StyledHeader>
  );
};

export default Header;