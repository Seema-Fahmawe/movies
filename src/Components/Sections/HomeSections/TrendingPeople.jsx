import React, { useContext, useEffect, useState } from 'react'
import { moviesTvPeopleContext } from '../../Context/MoviesTVPeopleContext.jsx';
import CustomeHomeTitleSections from '../../Custome/CustomeHomeTitleSections.jsx';
import CustomeBodyHomeSections from '../../Custome/CustomeBodyHomeSections.jsx';
import LoaderSection from '../../LoaderSections/LoaderSection.jsx';

export default function TrendingPeople() {

    const [trendingPeople, setTrendingPeople] = useState([]);
    const { getTrendingContext } = useContext(moviesTvPeopleContext);

    async function getTrending(val) {
        const res = await getTrendingContext('person', val);
        setTrendingPeople(res.results);
    }

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    useEffect(() => {
        getTrending('day');
    },[]);

    return (
        <>
        {trendingPeople.length >0 ?<>
            <CustomeHomeTitleSections title="Trending Persons" link1="Today" link2="This Week" onClick1={() => getTrending('day')} onClick2={() => getTrending('week')} section="people" />
            <CustomeBodyHomeSections items={trendingPeople} type='People' setting={settings} /></>:<><LoaderSection/></>}
         
        </>
    )
}
