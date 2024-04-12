
import React from 'react';
import "../sass/blocks/hero.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__container">
				<h1 className="hero__title">Капитальный ремонт квартир.
					Без задержек и&nbsp;превышения сметы</h1>
				<p className="hero__text">Под ключ от 5500 ₽ за 1 м²</p>
				<a href="#" className="hero__link" aria-label="Открыть калькулятор стоимости">✓ Рассчитать стоимость</a>
			</div>
			<div className="hero__slider">
				<div className="hero__wrapper">
					<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
						<SwiperSlide>
							<img src="./images/img-slide-1.jpeg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="./images/img-slide-2.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="./images/img-slide-3.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="./images/img-slide-4.jpg" alt="" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Hero