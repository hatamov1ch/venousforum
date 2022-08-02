import StyledNavigation, { List, Dropdown } from "./Navigation.styled";

import { RiArrowDropDownLine } from "react-icons/ri";

const Navigation = () => {
  return (
    <StyledNavigation>
      <List>
        <li>
          <a className={"active"} href="#">
            Главная
          </a>
        </li>

        <li>
          <a href="#">Конференция</a>

          <Dropdown className="dropdown">
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              приветствие
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              оргкомитет
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              спикеры
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              спонсоры
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              место проведения
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              контакты
            </a>
          </Dropdown>
        </li>

        <li>
          <a href="#">Программа</a>
        </li>

        <li>
          <a href="#">Участие</a>
          <Dropdown className="dropdown">
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              тематика
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              трансляция форума
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              мастер классы
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              тезисы
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              доклад
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              сборник
            </a>
            <a
              className="dropdown__item"
              href="https://venousforum.uz/приветствие/"
            >
              галерея
            </a>
          </Dropdown>
        </li>

        <li>
          <a href="#">Контакты</a>
        </li>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;