import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { moviesTvPeopleContext } from '../../Context/MoviesTVPeopleContext.jsx';
import HeaderPeopleDetails from './HeaderPeopleDetails.jsx';
import BodyPeopleDetails from './BodyPeopleDetails.jsx';
import axios from 'axios';

export default function PeopleDetails() {

    let { id } = useParams();
    const [person, setPerson] = useState({});
    const [persons, setPersons] = useState([]);
    const { getItemDetailsContext } = useContext(moviesTvPeopleContext);
    const { getListMoviesAndTVsAndPeopleContext } = useContext(moviesTvPeopleContext);

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
        setMovies(movieCasts.concat(movieCrew));
    }

    async function tvCredits() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
        setTvCast(data.cast);
        setTvCrew(data.crew);
        setTv(tvCasts.concat(tvCrew));
    }

    async function getPeople() {
        const res = await getListMoviesAndTVsAndPeopleContext('person', 'popular');
        setPersons(res.results);
    }

    async function getDetails() {
        const res = await getItemDetailsContext(id, 'person');
        setPerson(res);
    }

    useEffect(() => {
        getDetails();
        getPeople();
        tvCredits();
        movieCredits();
    }, [id]);

    return (
        <>
            <HeaderPeopleDetails person={person}  />
            <BodyPeopleDetails person={person} tv={tvCasts} movies={movieCasts} />
        </>
    )
}
