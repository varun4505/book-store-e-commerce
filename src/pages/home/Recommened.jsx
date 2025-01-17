import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

const Recommended = ({ books }) => {
    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {books.map((book, index) => (
                    <SwiperSlide key={index}>
                        <div className="book-slide">
                            <img src={book.cover} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Recommended;