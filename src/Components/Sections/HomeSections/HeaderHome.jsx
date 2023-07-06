import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import HeaderDetailsMovie from './HeaderDetailsMovie.jsx';
import LoaderSection from '../../LoaderSections/LoaderSection.jsx';


export default function HeaderHome() {

    const [LimitAllTrending, setLimitAll] = useState([]);

    async function trendingAll(val) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/${val}?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
        setLimitAll(data.results.slice(0, 3));
    }

    useEffect(() => {
        trendingAll('day');
    }, []);

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            {LimitAllTrending.length > 0 ? <>
                <Slider {...settings}>
                    {LimitAllTrending.map((movie) => {
                        return <HeaderDetailsMovie movie={movie} type={movie.media_type} />
                    })}
                </Slider></> : <><LoaderSection/></>}
        </>
    )
}
