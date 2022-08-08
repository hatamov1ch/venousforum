import StyledMeetingInfo, {
  Content,
  Title,
  Main,
  Location,
  Time,
  GoogleMap,
} from "./MeetingInfo.styled";

const MeetingInfo = () => {
  return (
    <StyledMeetingInfo>
      <div className="container">
        <Content>
          <Main>
            <Title>Место проведения встречи</Title>
            <p>
              Лимфология как самостоятельная наука «выросла» из функциональной
              анатомии лимфатической системы (ЛСи), которая изучает ее строение
              в связи с функциями и в развитии [19]. Именно анатомы сформировали
              классические представления о ЛСи как системе лимфатических сосудов
              и узлов.
            </p>

            <address>
              <Location>
                Конференц-зал клиники Akfa Medline
                <br />
                ул. Кичик халка йули, 5A, г. Ташкент, Узбекистан
              </Location>

              <Time>
                <h4>15-16 октября, 2021 г.</h4>
                <p>с 09:00 по 18:00</p>
              </Time>
            </address>
          </Main>

          <GoogleMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5990.80181279964!2d69.210938!3d41.343639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4121fc2683e499ca!2sAkfa%20Medline!5e0!3m2!1sen!2sus!4v1659950243847!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </GoogleMap>
        </Content>
      </div>
    </StyledMeetingInfo>
  );
};

export default MeetingInfo;