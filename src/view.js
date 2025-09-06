// frontend.js
import { createRoot } from 'react-dom/client';
import React, { useRef, useEffect } from 'react';
import './style.scss';
import Style from './Components/Common/Style';
import FeedbackSectionTwo from './Components/Common/theme/FeedbackSectionTwo';

const TestimonialBlock = ({ attributes, id }) => {
	const swiperRef = useRef(null);

	useEffect(() => {
		if (window.Swiper && swiperRef.current) {
			new window.Swiper(swiperRef.current, {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				navigation: {
					nextEl: swiperRef.current.querySelector('.swiper-button-next'),
					prevEl: swiperRef.current.querySelector('.swiper-button-prev'),
				},
				pagination: {
					el: swiperRef.current.querySelector('.swiper-pagination'),
					clickable: true,
				},
				breakpoints: {
					1024: { slidesPerView: 1 },
					768: { slidesPerView: 1 },
					480: { slidesPerView: 1 },
				},
			});
		}
	}, []);

	return (
		<>
			<Style attributes={attributes} id={id} />
			<div className="swiper mySwiper" ref={swiperRef}>
				<div className="swiper-wrapper">
					<FeedbackSectionTwo {...{ attributes }} />
				</div>
				<div className="swiper-pagination"></div>
				<div className="swiper-button-next"></div>
				<div className="swiper-button-prev"></div>
			</div>
		</>
	);
};

// DOM এ রেন্ডার
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.wp-block-b-blocks-prst-testimonial').forEach(block => {
		const attributes = JSON.parse(block.dataset.attributes);
		createRoot(block).render(<TestimonialBlock attributes={attributes} id={block.id} />);
		block.removeAttribute('data-attributes');
	});
});






// // frontend.js
// import './style.scss';
// import Style from './Components/Common/Style';
// import FeedbackSectionTwo from './Components/Common/theme/FeedbackSectionTwo';

// document.addEventListener('DOMContentLoaded', () => {
// 	const blocks = document.querySelectorAll('.wp-block-b-blocks-prst-testimonial');


// 	blocks.forEach(block => {
// 		const attributes = JSON.parse(block.dataset.attributes);

// 		// Render React components
// 		const { createRoot } = require('react-dom/client');
// 		const React = require('react');

// 		createRoot(block).render(
// 			<>
// 				<Style attributes={attributes} id={block.id} />
// 				<div className="swiper mySwiper">
// 					<div className="swiper-wrapper">
// 						<FeedbackSectionTwo {...{ attributes }} />
// 					</div>
// 					<div className="swiper-pagination"></div>
// 					<div className="swiper-button-next"></div>
// 					<div className="swiper-button-prev"></div>
// 				</div>
// 			</>
// 		);


// 		block.removeAttribute('data-attributes');
// 	});
// });
