import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { moviesTvPeopleContext } from '../../Context/MoviesTVPeopleContext.jsx';
import CustomeHeaderItemDetails from '../../Custome/CustomeHeaderItemDetails.jsx';
import CustomeBodyItemDetails from '../../Custome/CustomeBodyItemDetails.jsx';

export default function MovieDetails() {

    let { id } = useParams();
    const [movie, setMovie] = useState({});
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

    async function getDetails() {
        const res = await getItemDetailsContext(id, 'movie');
        setMovie(res);
        setGenres(res.genres);
    }

    async function getCredits() {
        const res = await getCreditsContext(id, 'movie');
        setCastsAll(res.cast);
        setCasts(res.cast.slice(0, 4));
    }

    async function getVideos() {
        const res = await getVideosContext(id, 'movie');
        setVideos(res.results);
    }

    async function getReviews() {
        const res = await getReviewsContext(id, 'movie');
        setReviews(res.results);
    }

    async function getRecommendatins() {
        const res = await getRecommendatinsContext(id, 'movie');
        setRecommendation(res.results);
    }

    async function getSimilar() {
        const res = await getSimilarContext(id, 'movie');
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


    return (
        <>
            <CustomeHeaderItemDetails item={movie} genres={genres} casts={casts} setCasts={setCasts} castAll={castAll} type="Movie" />
            <CustomeBodyItemDetails video={videos} review={reviews} recommendation={recommendation} similar={similar} type="Movie" id={id} />
        </>
    )
}
