import { useEffect, useRef } from 'react';
import FeedbackSectionTwo from '../theme/FeedbackSectionTwo';

const Testimonial = ({ attributes, setAttributes }) => {

    const swiperRef = useRef(null);

    useEffect(() => {
        if (window.Swiper && swiperRef.current) {
            new window.Swiper(swiperRef.current, {
                slidesPerView: 1,          // একসাথে ৪টি কার্ড দেখাবে
                spaceBetween: 20,          // কার্ডের মধ্যে ২০px ফাঁক
                loop: true,                // লুপিং
                navigation: {
                    nextEl: swiperRef.current.querySelector(".swiper-button-next"),
                    prevEl: swiperRef.current.querySelector(".swiper-button-prev"),
                },
                pagination: {
                    el: swiperRef.current.querySelector(".swiper-pagination"),
                    clickable: true,
                },
                breakpoints: {             // Responsive
                    1024: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                }
            });
        }
    }, []);

    return (
        <>
            <div className="swiper mySwiper" ref={swiperRef}>
                <div className="swiper-wrapper">
                    <FeedbackSectionTwo {...{ attributes, setAttributes }} />
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </>
    )
}

export default Testimonial;