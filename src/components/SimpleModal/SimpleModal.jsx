import React from "react";
import { Transition } from "react-transition-group";
import "./SimpleModal.scss";

export const SimpleModal = ({ isOpen, onClose, children }) => {
	const onContentClick = (e) => {
		if (e.target.classList.contains("modal__overlay")) onClose();
	}
	return (
		<>
			<Transition in={isOpen} timeout={350} unmountOnExit={true}>
				{(state) => (
					<div className={`modal modal--${state}`}>
						<div className="modal__overlay " onClick={onContentClick}>
							<div className="modal__content">
								<button className="modal__close-btn" onClick={() => onClose()}>
									<svg width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<path id="×" d="M24.73 19.98L20.25 24.46L12.31 16.51L4.35 24.46L-0.11 19.98L7.81 12.05L-0.11 4.13L4.35 -0.4L12.31 7.55L20.25 -0.4L24.73 4.13L16.8 12.05L24.73 19.98Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd" />
									</svg>
								</button>
								{children}
							</div>
						</div>
					</div>
				)}
			</Transition>
		</>
	)
}