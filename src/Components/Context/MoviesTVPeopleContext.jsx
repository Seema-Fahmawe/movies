import axios from 'axios';
import React, { createContext } from 'react'

export const moviesTvPeopleContext = createContext(null);

export default function MoviesTVPeopleContextProvider({ children }) {

    async function getTrendingContext(valType, time) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${valType}/${time}?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`)
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getListMoviesAndTVsAndPeopleContext(valType, listItem) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/${valType}/${listItem}?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getItemDetailsContext(id, valType) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/${valType}/${id}?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getCreditsContext(id, valType) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/${valType}/${id}/credits?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
            return data;

        } catch (error) {
            console.log(error);
        }
    }

    async function getVideosContext(id, valType) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/${valType}/${id}/videos?api_key=6e56c2675e23a05853e1fb0d1f3a0e93&append_to_response=videos`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getReviewsContext(id, valType) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/${valType}/${id}/reviews?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getRecommendatinsContext(id, valType) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/${valType}/${id}/recommendations?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getSimilarContext(id, valType) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/${valType}/${id}/similar?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getGenresContext(valType) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/genre/${valType}/list?api_key=6e56c2675e23a05853e1fb0d1f3a0e93`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return <moviesTvPeopleContext.Provider value={{
        getTrendingContext, getListMoviesAndTVsAndPeopleContext, getItemDetailsContext, getCreditsContext, getVideosContext,
        getReviewsContext, getRecommendatinsContext, getSimilarContext,getGenresContext
    }}>
        {children}
    </moviesTvPeopleContext.Provider>
}
