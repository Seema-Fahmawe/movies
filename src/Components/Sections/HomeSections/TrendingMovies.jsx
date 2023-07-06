import React, { useContext, useEffect, useState } from 'react'
import CustomeHomeTitleSections from '../../Custome/CustomeHomeTitleSections.jsx';
import { moviesTvPeopleContext } from '../../Context/MoviesTVPeopleContext.jsx';
import CustomeBodyHomeSections from '../../Custome/CustomeBodyHomeSections.jsx';

export default function TrendingMovies() {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const { getTrendingContext } = useContext(moviesTvPeopleContext);

    async function getTrending(val) {
        const res = await getTrendingContext('movie', val);
        setTrendingMovies(res.results);
    }

    useEffect(() => {
        getTrending('day');
    }, []);

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <>
            <CustomeHomeTitleSections title="Trending Movies" link1="Today" link2="This Week" onClick1={() => getTrending('day')} onClick2={() => getTrending('week')} section="movies" />
            <CustomeBodyHomeSections items={trendingMovies} type='Movie' setting={settings} />
        </>
    )
}
