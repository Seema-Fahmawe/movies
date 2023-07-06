import React, { useContext, useEffect, useState } from 'react'
import { moviesTvPeopleContext } from '../../Context/MoviesTVPeopleContext.jsx';
import { useParams } from 'react-router-dom';
import CustomeHeaderItemDetails from '../../Custome/CustomeHeaderItemDetails.jsx';
import CustomeBodyItemDetails from '../../Custome/CustomeBodyItemDetails.jsx';
import LoaderSection from '../../LoaderSections/LoaderSection.jsx';

export default function TvDetails() {

    let { id } = useParams();
    const [tv, setTv] = useState({});
    const [genres, setGenres] = useState([]);
    const [casts, setCasts] = useState([]);
    const [castAll, setCastsAll] = useState([]);
    const [videos, setVideos] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [recommendation, setRecommendation] = useState([]);
    const [similar, setSimilar] = useState([]);
    const { getItemDetailsContext } = useContext(moviesTvPeopleContext);
    const { getCreditsContext } = useContext(moviesTvPeopleContext);
    const { getVideosContext } = useContext(moviesTvPeopleContext);
    const { getReviewsContext } = useContext(moviesTvPeopleContext);
    const { getRecommendatinsContext } = useContext(moviesTvPeopleContext);
    const { getSimilarContext } = useContext(moviesTvPeopleContext);
    const [loading, setLoading] = useState(true);

    async function getDetails() {
        const res = await getItemDetailsContext(id, 'tv');
        setTv(res);
        setGenres(res.genres);
    }

    async function getCredits() {
        const res = await getCreditsContext(id, 'tv');
        setCastsAll(res.cast);
        setCasts(res.cast.slice(0, 4));
    }

    async function getVideos() {
        const res = await getVideosContext(id, 'tv');
        setVideos(res.results);
    }

    async function getReviews() {
        const res = await getReviewsContext(id, 'tv');
        setReviews(res.results);
        setLoading(false);
    }

    async function getRecommendatins() {
        const res = await getRecommendatinsContext(id, 'tv');
        setRecommendation(res.results);
    }

    async function getSimilar() {
        const res = await getSimilarContext(id, 'tv');
        setSimilar(res.results);
    }

    useEffect(() => {
        getDetails();
        getCredits();
        getVideos();
        getReviews();
        getRecommendatins();
        getSimilar();
    }, [id]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <>
            {loading ? <><LoaderSection /></> : <>
                <CustomeHeaderItemDetails item={tv} genres={genres} casts={casts} setCasts={setCasts} castAll={castAll} type="Tv" />
                <CustomeBodyItemDetails video={videos} review={reviews} recommendation={recommendation} similar={similar} type="Tv" id={id} /></>}
        </>
    )
}
