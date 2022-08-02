import StyledSponsor, { Card, Controllers } from "./Sponsor.styled";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Sponsor = () => {
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
    <StyledSponsor>
      <Controllers>
        <span
          role="button"
          className="arrow arrow--previous"
          ref={swiperPreviousRef}
        >
          <BsChevronLeft className="icon" />
        </span>
        <span role="button" className="arrow arrow--next" ref={swiperNextRef}>
          <BsChevronRight className="icon" />
        </span>
      </Controllers>

      <Swiper
        onInit={(swiper) => setSwiper((state) => (state = swiper))}
        navigation={{
          prevEl: swiperPreviousRef.current,
          nextEl: swiperNextRef.current,
        }}
        spaceBetween={30}
        slidesPerView={3}
        modules={[Navigation]}
        speed={500}
        className="swiper-slides"
      >
        <SwiperSlide>
          <Card>
            <img
              src="/sponsors/bayer.png"
              alt="Логотип генерального спонсора"
            />

            <div className="body">
              <h3>Генеральный спонсор</h3>
              <p>
                Байер АГ, Bayer AG — немецкая химико-фармацевтическая
                транснациональная корпорация, основанная в 1863 году.
              </p>
            </div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img
              src="/sponsors/servier.png"
              alt="Логотип генерального спонсора"
            />

            <div className="body">
              <h3>Генеральный спонсор</h3>
              <p>
                Servier, Сервье — французская транснациональная фармацевтическая
                компания. Находится под управлением...
              </p>
            </div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img
              src="/sponsors/innotech-international.png"
              alt="Логотип главного спонсора"
            />

            <div className="body">
              <h3>Главный спонсор</h3>
              <p>
                Компания Лаборатория ИННОТЕК Интернасиональ, представленная
                более чем в 100 странах мираю
              </p>
            </div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img src="/sponsors/gmp.jpg" alt="Логотип главного спонсора" />

            <div className="body">
              <h3>Главный спонсор</h3>
              <p>
                Компания GM Pharmaceuticals расположена в Тбилиси, в Нижнем
                Поничала. Предприятие оснащено новейшим немецким
              </p>
            </div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <img src="/sponsors/medi.png" alt="Логотип главного спонсора" />

            <div className="body">
              <h3>Главный спонсор</h3>
              <p>
                Магазин ортопедических изделий, производства немецкой компании
                medi GmbH & Co. KG.
              </p>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </StyledSponsor>
  );
};

export default Sponsor;