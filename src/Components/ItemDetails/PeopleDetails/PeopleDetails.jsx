import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { moviesTvPeopleContext } from '../../Context/MoviesTVPeopleContext.jsx';
import HeaderPeopleDetails from './HeaderPeopleDetails.jsx';
import BodyPeopleDetails from './BodyPeopleDetails.jsx';
import axios from 'axios';
import LoaderSection from '../../LoaderSections/LoaderSection.jsx';

export default function PeopleDetails() {

    let { id } = useParams();
    const [person, setPerson] = useState({});
    const { getItemDetailsContext } = useContext(moviesTvPeopleContext);

    const [movieCasts, setMovieCasts] = useState([]);
    const [movieCrew, setMovieCrew] = useState([]);
    const [movies, setMovies] = useState([]);

    const [tvCasts, setTvCast] = useState([]);
    const [tvCrew, setTvCrew] = useState([]);
    const [tv, setTv] = useState([]);

    async function movieCredits() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
        setMovieCasts(data.cast);
        setMovieCrew(data.crew);
    }

    async function tvCredits() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
        setTvCast(data.cast);
        setTvCrew(data.crew);
    }

    async function getDetails() {
        const res = await getItemDetailsContext(id, 'person');
        setPerson(res);
    }

    useEffect(() => {
        setMovies(movieCasts.concat(movieCrew));
    }, [movieCasts, movieCrew]);

    useEffect(() => {
        setTv(tvCasts.concat(tvCrew));
    }, [tvCasts, tvCrew]);

    useEffect(() => {
        getDetails();
        tvCredits();
        movieCredits();
    }, [id]);

    return (
        <>
            {movies.length > 0 || tv.length > 0 ? <>
                <HeaderPeopleDetails person={person} />
                <BodyPeopleDetails person={person} tv={tv} movies={movies} /></> : <><LoaderSection /></>}
        </>
    )
}
