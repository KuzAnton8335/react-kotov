
import React, { useState } from "react";
import "../sass/blocks/header.scss";
import { SimpleModal } from "./SimpleModal/SimpleModal";


const Header = () => {
	const [modalMenuIsOpen, setModalMenuOpen] = useState(false);
	const [modalFormIsOpen, setModalFormOpen] = useState(false);
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logotyp">
					<button className="header__btn-burger" type="button" onClick={() => setModalMenuOpen(true)}>
						<span className="header__line"></span>
						<span className="header__line"></span>
						<span className="header__line"></span>
					</button>
					<img src="./images/logo.svg" alt="котов" />
				</div>
				<div className="header__info">
					<a href="tel:79277051586" className="header__info-tel">+7 927 705-15-86</a>
					<button className="header__btn-phone" type="button" onClick={() => setModalFormOpen(true)}>Заказать звонок</button>
				</div>
			</div>
			<SimpleModal className="header__menu" isOpen={modalMenuIsOpen} onClose={() => setModalMenuOpen(false)}>
				<nav className="header__nav">
					<ul className="header__nav-list">
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Главная</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">О нас</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Наши проекты</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Цены на ремонт</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Отзывы клиентов</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Расчет стоимости </a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Контакты</a>
						</li>
					</ul>
				</nav>
				<div className="header__social">
					<p>Задать вопрос</p>
					<ul className="header__social-list">
						<li className="header__social-item">
							<a href="#" className="header__social-link">
								<svg width="27.000000" height="27.000000" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<path id="Vector" d="M21.78 6.28C21.78 7.19 21.05 7.91 20.15 7.91C19.26 7.91 18.53 7.17 18.53 6.28C18.53 5.39 19.26 4.67 20.15 4.67C21.05 4.67 21.78 5.39 21.78 6.28ZM12.91 18C15.41 18.04 17.46 16.04 17.5 13.57C17.54 11.09 15.54 9.03 13.04 9C13 9 12.95 9 12.91 9C10.41 9 8.39 11.01 8.39 13.5C8.39 15.99 10.41 18 12.91 18ZM12.91 6.57C16.76 6.52 19.91 9.59 19.96 13.42C20.01 17.25 16.93 20.39 13.08 20.44C13.02 20.44 12.97 20.44 12.91 20.44C9.07 20.39 5.98 17.25 6.03 13.42C6.08 9.64 9.14 6.61 12.91 6.57ZM12.91 2.42C9.3 2.42 8.86 2.44 7.44 2.5C6.11 2.57 5.39 2.78 4.92 2.97C4.32 3.19 3.79 3.53 3.36 3.98C2.91 4.42 2.56 4.94 2.35 5.53C2.17 6.02 1.94 6.73 1.88 8.05C1.81 9.47 1.79 9.89 1.79 13.5C1.79 17.1 1.8 17.53 1.87 18.95C1.93 20.27 2.16 20.98 2.34 21.46C2.59 22.09 2.88 22.54 3.35 23.01C3.82 23.48 4.27 23.77 4.91 24.02C5.39 24.2 6.1 24.42 7.43 24.49C8.85 24.56 9.29 24.57 12.9 24.57C16.52 24.57 16.95 24.56 18.39 24.49C19.71 24.43 20.42 24.21 20.91 24.02C21.5 23.8 22.03 23.46 22.46 23.01C22.92 22.57 23.26 22.04 23.48 21.46C23.66 20.98 23.89 20.27 23.95 18.95C24.02 17.53 24.03 17.1 24.03 13.5C24.03 9.89 24.02 9.47 23.95 8.03C23.89 6.72 23.67 6 23.48 5.53C23.26 4.94 22.92 4.41 22.46 3.98C22.02 3.53 21.49 3.19 20.91 2.97C20.42 2.78 19.71 2.57 18.39 2.5C16.96 2.45 16.54 2.42 12.91 2.42ZM12.91 0C16.6 0 17.06 0 18.51 0.08C19.95 0.14 20.94 0.36 21.8 0.71C22.7 1.04 23.53 1.58 24.2 2.27C24.89 2.94 25.43 3.75 25.77 4.66C26.1 5.52 26.33 6.5 26.4 7.94C26.46 9.37 26.47 9.83 26.47 13.5C26.47 17.17 26.46 17.62 26.39 19.07C26.32 20.51 26.09 21.49 25.76 22.35C25.42 23.25 24.88 24.07 24.19 24.74C23.52 25.43 22.69 25.96 21.79 26.3C20.93 26.63 19.94 26.86 18.5 26.93C17.06 26.98 16.6 27 12.91 27C9.23 27 8.76 26.98 7.32 26.92C5.87 26.85 4.89 26.63 4.02 26.29C3.12 25.95 2.3 25.42 1.62 24.73C0.93 24.06 0.4 23.24 0.06 22.34C-0.28 21.48 -0.51 20.5 -0.58 19.06C-0.63 17.62 -0.65 17.17 -0.65 13.5C-0.65 9.83 -0.63 9.37 -0.57 7.92C-0.5 6.5 -0.27 5.5 0.07 4.66C0.41 3.75 0.94 2.94 1.63 2.27C2.31 1.58 3.13 1.04 4.03 0.71C4.9 0.36 5.88 0.14 7.32 0.08C8.76 0 9.24 0 12.91 0Z" fill="#F05A26" fill-opacity="1.000000" fill-rule="nonzero" />
								</svg>
							</a>
						</li>
						<li className="header__social-item">
							<a href="#" className="header__social-link">
								<svg width="31.000000" height="18.000000" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<path id="Vector" d="M30.35 15.54C29.81 14.56 28.78 13.35 27.26 11.91L27.21 11.86C26.49 11.18 26.04 10.73 25.86 10.5C25.53 10.06 25.45 9.62 25.63 9.17C25.76 8.83 26.24 8.11 27.09 7.02C27.53 6.44 27.88 5.97 28.14 5.62C30.01 3.1 30.82 1.49 30.57 0.79L30.47 0.63C30.41 0.53 30.24 0.44 29.97 0.36C29.7 0.28 29.36 0.26 28.94 0.32L24.27 0.35C24.19 0.32 24.09 0.32 23.94 0.36L23.73 0.41L23.65 0.45L23.59 0.49C23.52 0.54 23.46 0.59 23.41 0.66C23.34 0.75 23.29 0.84 23.25 0.95C22.77 2.22 22.19 3.46 21.51 4.65C21.16 5.25 20.8 5.84 20.41 6.42C20.08 6.92 19.8 7.28 19.57 7.52C19.33 7.76 19.13 7.95 18.95 8.09C18.77 8.23 18.63 8.29 18.53 8.27C18.44 8.25 18.35 8.23 18.26 8.2C18.11 8.1 17.98 7.96 17.9 7.8C17.8 7.6 17.74 7.38 17.71 7.16C17.68 6.94 17.66 6.72 17.65 6.49C17.64 6.3 17.65 6.04 17.66 5.7C17.67 5.36 17.68 5.13 17.68 5.01C17.68 4.59 17.69 4.14 17.7 3.66L17.74 2.5C17.75 2.22 17.76 1.91 17.76 1.6C17.76 1.28 17.74 1.03 17.7 0.85C17.67 0.66 17.61 0.49 17.54 0.32C17.47 0.16 17.36 0.02 17.21 -0.07C17.03 -0.17 16.85 -0.25 16.66 -0.29C16.09 -0.42 15.36 -0.49 14.47 -0.5C12.46 -0.52 11.17 -0.39 10.6 -0.11C10.37 0.02 10.15 0.18 9.98 0.38C9.79 0.62 9.76 0.75 9.9 0.77C10.55 0.87 11.01 1.1 11.28 1.48L11.38 1.68C11.45 1.82 11.53 2.07 11.61 2.44C11.68 2.8 11.73 3.2 11.76 3.64C11.81 4.44 11.81 5.12 11.76 5.69C11.71 6.26 11.65 6.7 11.61 7.02C11.58 7.29 11.5 7.55 11.39 7.79C11.33 7.91 11.27 8.04 11.2 8.15C11.18 8.18 11.15 8.21 11.12 8.23C10.98 8.28 10.83 8.31 10.68 8.31C10.53 8.31 10.35 8.23 10.12 8.08C9.87 7.9 9.65 7.68 9.45 7.45C9.16 7.1 8.9 6.72 8.67 6.32C8.34 5.77 8.04 5.2 7.76 4.61L7.5 4.13C7.27 3.69 7.05 3.24 6.84 2.79C6.57 2.23 6.32 1.67 6.1 1.09C6.03 0.88 5.89 0.7 5.71 0.56L5.63 0.51C5.54 0.45 5.45 0.41 5.36 0.37C5.24 0.32 5.12 0.28 4.99 0.26L0.55 0.29C0.1 0.29 -0.21 0.39 -0.37 0.6L-0.43 0.7C-0.47 0.78 -0.49 0.87 -0.48 0.96C-0.48 1.08 -0.45 1.23 -0.38 1.4C0.25 2.92 0.96 4.41 1.74 5.87C2.5 7.31 3.16 8.46 3.73 9.34C4.29 10.22 4.86 11.04 5.44 11.82C6.03 12.6 6.42 13.1 6.6 13.32C6.79 13.54 6.94 13.7 7.04 13.81L7.44 14.2C7.7 14.46 8.09 14.78 8.59 15.14C9.09 15.51 9.64 15.87 10.26 16.22C10.87 16.57 11.57 16.87 12.38 17.09C13.16 17.31 13.95 17.4 14.75 17.36L16.62 17.36C17 17.33 17.29 17.21 17.49 17L17.55 16.92C17.59 16.85 17.63 16.75 17.67 16.62C17.71 16.48 17.73 16.33 17.73 16.17C17.72 15.7 17.75 15.27 17.83 14.9C17.91 14.52 18 14.24 18.11 14.05C18.26 13.76 18.47 13.52 18.73 13.33C18.77 13.31 18.82 13.29 18.86 13.27C19.12 13.18 19.43 13.27 19.78 13.53C20.13 13.79 20.46 14.1 20.77 14.48C21.08 14.86 21.45 15.28 21.89 15.75C22.32 16.22 22.7 16.57 23.02 16.8L23.34 17C23.6 17.15 23.89 17.27 24.19 17.36C24.53 17.47 24.84 17.5 25.09 17.44L29.24 17.37C29.65 17.37 29.97 17.3 30.19 17.16C30.42 17.02 30.55 16.87 30.59 16.71C30.63 16.55 30.64 16.36 30.6 16.15C30.58 16 30.54 15.86 30.49 15.72C30.43 15.67 30.39 15.6 30.35 15.54Z" fill="#F05A26" fill-opacity="1.000000" fill-rule="nonzero" />
								</svg>
							</a>
						</li>
						<li className="header__social-item">
							<a href="#" className="header__social-link">
								<svg width="12.000000" height="25.000000" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<path id="Vector" d="M7.72 7.35L7.72 5.19C7.72 4.87 7.74 4.62 7.77 4.44C7.8 4.26 7.87 4.09 7.98 3.92C8.09 3.75 8.27 3.63 8.51 3.56C8.75 3.49 9.08 3.46 9.5 3.46L11.73 3.46L11.73 -0.84L8.16 -0.84C6.1 -0.84 4.61 -0.37 3.72 0.58C2.82 1.53 2.37 2.92 2.37 4.76L2.37 7.35L-0.3 7.35L-0.3 11.66L2.37 11.66L2.37 24.16L7.73 24.16L7.73 11.66L11.29 11.66L11.77 7.35L7.72 7.35Z" fill="#F05A26" fill-opacity="1.000000" fill-rule="nonzero" />
								</svg>
							</a>
						</li>
						<li className="header__social-item">
							<a href="#" className="header__social-link">
								<svg width="17.000000" height="29.000000" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<path id="Vector" d="M7.93 14.11C12.08 14.11 15.45 10.75 15.45 6.62C15.45 2.48 12.08 -0.87 7.93 -0.88C3.77 -0.88 0.41 2.48 0.4 6.61C0.41 10.75 3.77 14.1 7.93 14.11ZM7.93 3.51C9.65 3.51 11.04 4.9 11.04 6.61C11.04 8.32 9.65 9.71 7.93 9.71C6.21 9.71 4.82 8.32 4.82 6.61C4.82 4.9 6.21 3.51 7.93 3.51ZM10.97 20.22C12.52 19.87 14 19.26 15.34 18.42C16.38 17.77 16.68 16.42 16.03 15.39C15.39 14.36 14.03 14.05 13 14.7C9.9 16.63 5.97 16.63 2.87 14.7C1.81 14.08 0.47 14.43 -0.16 15.48C-0.75 16.48 -0.46 17.78 0.52 18.42C1.86 19.26 3.34 19.87 4.89 20.22L0.68 24.41C-0.19 25.26 -0.19 26.65 0.67 27.51C1.08 27.92 1.64 28.16 2.23 28.16C2.8 28.16 3.36 27.94 3.79 27.52L7.93 23.4L12.07 27.52C12.93 28.38 14.32 28.38 15.18 27.52C16.04 26.66 16.04 25.28 15.18 24.42L10.97 20.22Z" fill="#F05A26" fill-opacity="1.000000" fill-rule="evenodd" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</SimpleModal>
			<SimpleModal className="header__form" isOpen={modalFormIsOpen} onClose={() => setModalFormOpen(false)}>
				<div className="header__form-container">
					<h2 className="header__form-title">Заказать звонок</h2>
					<form className="header__form-form">
						<div className="form__exampel">
							<label htmlFor="name">Имя</label>
							<input type="text" name="name" required />
						</div>
						<div className="form__exampel">
							<label htmlFor="phone">Телефон</label>
							<input type="tel" name="phone" id="phone" required />
						</div>
						<div className="form__exampel">
							<label htmlFor="time">Удобное время для звонка</label>
							<input type="text" name="time" required />
							<span className="time__text">Мы можем перезвонить в любой день с 9:00 до 22:00</span>
						</div>
						<button className="form__submint">Отправить</button>
					</form>
					<div className="header__form-descr">
						<p className="header__form-descr-tex">
							Нажимая на кнопку, вы соглашаетесь с политикой
							<span className="header__form-descr-text--orange">
								защиты персональной информации.
							</span>
						</p>
					</div>
				</div>
			</SimpleModal>
		</header>
	)
}

export default Header