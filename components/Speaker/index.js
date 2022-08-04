import StyledSpeakers, { Content, Title, AllSpeakers } from "./Speakers.styled";
import Speaker from "./Speaker";

const Speakers = () => {
  return (
    <StyledSpeakers>
      <div className="container">
        <Content>
          <Title>Приглашенные Спикеры</Title>

          <AllSpeakers>
            <Speaker
              profilePhoto="https://venousforum.uz/wp-content/uploads/2018/12/unnamed-1.jpg"
              fullName="Шайдаков Евгений"
              about="Профессор, доктор медицинских наук, сосудистый хирург, Флеболог, Президент Санкт-Петербургского Венозного Форума, Президент Санкт-Петербургской ассоциации флебологов."
              contacts={{
                origin: "Санкт-Петербург, Россия",
                phone: "",
                email: "",
                socialNetworks: {
                  facebook: "https://facebook.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                },
              }}
            />

            <Speaker
              profilePhoto="https://venousforum.uz/wp-content/uploads/2018/12/unnamed-1.jpg"
              fullName="Шайдаков Евгений"
              about="Профессор, доктор медицинских наук, сосудистый хирург, Флеболог, Президент Санкт-Петербургского Венозного Форума, Президент Санкт-Петербургской ассоциации флебологов."
              contacts={{
                origin: "Санкт-Петербург, Россия",
                phone: "",
                email: "",
                socialNetworks: {
                  facebook: "https://facebook.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                },
              }}
            />

            <Speaker
              profilePhoto="https://venousforum.uz/wp-content/uploads/2018/12/unnamed-1.jpg"
              fullName="Шайдаков Евгений"
              about="Профессор, доктор медицинских наук, сосудистый хирург, Флеболог, Президент Санкт-Петербургского Венозного Форума, Президент Санкт-Петербургской ассоциации флебологов."
              contacts={{
                origin: "Санкт-Петербург, Россия",
                phone: "",
                email: "",
                socialNetworks: {
                  facebook: "https://facebook.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                },
              }}
            />

            <Speaker
              profilePhoto="https://venousforum.uz/wp-content/uploads/2018/12/unnamed-1.jpg"
              fullName="Шайдаков Евгений"
              about="Профессор, доктор медицинских наук, сосудистый хирург, Флеболог, Президент Санкт-Петербургского Венозного Форума, Президент Санкт-Петербургской ассоциации флебологов."
              contacts={{
                origin: "Санкт-Петербург, Россия",
                phone: "",
                email: "",
                socialNetworks: {
                  facebook: "https://facebook.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                },
              }}
            />

            <Speaker
              profilePhoto="https://venousforum.uz/wp-content/uploads/2018/12/unnamed-1.jpg"
              fullName="Шайдаков Евгений"
              about="Профессор, доктор медицинских наук, сосудистый хирург, Флеболог, Президент Санкт-Петербургского Венозного Форума, Президент Санкт-Петербургской ассоциации флебологов."
              contacts={{
                origin: "Санкт-Петербург, Россия",
                phone: "",
                email: "",
                socialNetworks: {
                  facebook: "https://facebook.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                },
              }}
            />
          </AllSpeakers>
        </Content>
      </div>
    </StyledSpeakers>
  );
};

export default Speakers;