import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import david from "./assets/davivrotebit.svg"
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import circle from "./assets/circle.svg"
import tocxhki from "./assets/tocki.svg"

const Slider1 = () => {
    const slides = [
        {
            image: david,
            name: "Ronald Richards",
            role: "Product Manager",
            quote:
                "Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.",
        },
        {
            image: david,
            name: "Anna Johnson",
            role: "UX Designer",
            quote:
                "Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.",
        },
        {
            image: david,
            name: "Michael Lee",
            role: "Software Engineer",
            quote:
                "Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.",
        },
    ];

    return (
        <div className="slider-container">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                pagination={{
                    el: ".swiper-pagination-custom",
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-bullet"></span>`;
                    },
                }}
                className="swiper"
                spaceBetween={50}
                slidesPerView={1}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <div className="image-container">
                                <img className="chel" src={slide.image} alt={slide.name} />
                                <img className="circle" src={circle} alt=""/>
                            </div>
                            <div className="text-container">
                                <div className="texttoc">
                                    <img src={tocxhki} className="tochki" alt=""/>
                                    <p className="quote">{slide.quote}</p>
                                </div>
                                <div className="chel-imfo">
                                    <h3>{slide.name}</h3>
                                    <p className="role">{slide.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev-custom"><HiOutlineChevronLeft size={50}/></div>
                <div className="swiper-button-next-custom"><HiOutlineChevronRight  size={50}/></div>
                <div className="swiper-pagination-custom"></div>
            </Swiper>
        </div>
    );
};

export default Slider1;
