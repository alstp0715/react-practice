import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const PrevArrow = (props) => (
    <div className="slide-btn prev" onClick={props.onClick}>
        <VscChevronLeft />
    </div>
);

const NextArrow = (props) => (
    <div className="slide-btn next" onClick={props.onClick}>
        <VscChevronRight />
    </div>
);

const Slide = ({ galleryData }) => {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="item slider">
            <p className="title">갤러리</p>
            <Slider {...settings}>
                {galleryData &&
                    galleryData.map((item) => (
                        <div key={item.id}>
                            <Link to={`../gallery/${item.id}`}>
                                <div className="img-box">
                                    <img src={item.imageSrc} alt="" />
                                </div>
                                <p className="name">{item.title}</p>
                                <p className="date">{item.date}</p>
                            </Link>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default Slide;
