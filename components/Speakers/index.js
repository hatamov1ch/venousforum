import { useState, useRef, useEffect } from "react";
import StyledSpeakers, {
  Content,
  Title,
  SpeakersContainer,
  Controllers,
} from "./Speakers.styled";
import Speaker from "./Speaker";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

//React icons
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Speakers = ({ speakers }) => {
  const [swiper, setSwiper] = useState(null);
  const swiperPreviousRef = useRef(null);
  const swiperNextRef = useRef(null);

  useEffect(() => {
    if (swiper && swiper.params) {
      swiper.params.navigation.prevEl = swiperPreviousRef.current;
      swiper.params.navigation.nextEl = swiperNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <StyledSpeakers>
      <div className="container">
        <Content>
          <Title>Приглашенные Спикеры</Title>

          {/*Setup swiper js for the speakers list*/}
          <SpeakersContainer>
            <Controllers>
              <span
                role="button"
                className="arrow arrow--previous"
                ref={swiperPreviousRef}
              >
                <BsChevronLeft className="icon" />
              </span>
              <span
                role="button"
                className="arrow arrow--next"
                ref={swiperNextRef}
              >
                <BsChevronRight className="icon" />
              </span>
            </Controllers>
            <Swiper
              onInit={(swiper) => setSwiper((state) => (state = swiper))}
              navigation={{
                prevEl: swiperPreviousRef.current,
                nextEl: swiperNextRef.current,
              }}
              slidesPerView={5}
              modules={[Navigation]}
              speed={350}
              className="swiper-slides"
            >
              {speakers.map((speaker) => {
                return (
                  <SwiperSlide
                    key={
                      speaker.profile.first_name.replace(" ", "-") + speaker.id
                    }
                  >
                    <Speaker speaker={speaker} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </SpeakersContainer>
        </Content>
      </div>
    </StyledSpeakers>
  );
};

export default Speakers;