import React, { useContext, useEffect, useState } from 'react'
import CustomeHomeTitleSections from '../../Custome/CustomeHomeTitleSections.jsx';
import { moviesTvPeopleContext } from '../../Context/MoviesTVPeopleContext.jsx';
import CustomeBodyHomeSections from '../../Custome/CustomeBodyHomeSections.jsx';

export default function TrendingTv() {

    const [trendingTv, setTrendingTv] = useState([]);

    const { getTrendingContext } = useContext(moviesTvPeopleContext);

    async function getTrending(val) {
        const res = await getTrendingContext('tv', val);
        setTrendingTv(res.results);
    }

    useEffect(() => {
        getTrending('day');
    },[]);

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
            <CustomeHomeTitleSections title="Trending TV" link1="Today" link2="This Week" onClick1={() => getTrending('day')} onClick2={() => getTrending('week')} section="tv" />
            <CustomeBodyHomeSections items={trendingTv} type='Tv' setting={settings} />
        </>
    )
}
