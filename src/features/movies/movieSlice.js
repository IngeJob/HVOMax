import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies =  createAsyncThunk('movies/fetchAsyncMovies', 
    async (term) =>{

        const request = await movieApi
            .get(`/?apiKey=${APIKEY}&s=${term}&type=movie`)
        return request.data;
    }
);

export const fetchAsyncSeries =  createAsyncThunk('movies/fetchAsyncSeries', 
    async (term) =>{

        const request = await movieApi
            .get(`/?apiKey=${APIKEY}&s=${term}&type=series`)   
        return request.data;
    }
);

export const fetchAsyncMovieOrSerieDetail =  createAsyncThunk('movies/fetchAsyncMovieOrSerieDetail', 
    async (id) =>{
        const request = await movieApi
            .get(`/?apiKey=${APIKEY}&i=${id}&Plot=full`)    
        return request.data;
    }
);

const initialState = {
    movies: {},
    series: {},
    selectedMovieOrSerie: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        removeSelectedMovieOrSerie: (state) =>{
            state.selectedMovieOrSerie = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            //console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            //console.log("Fetched");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
            //console.log("Fetched");
            return {...state, series: payload}
        },
        [fetchAsyncMovieOrSerieDetail.fulfilled]: (state, {payload}) => {
            //console.log("Fetched");
            return {...state, selectedMovieOrSerie: payload}
        },
    }
})

export const { removeSelectedMovieOrSerie } = movieSlice.actions;
export const getAllMovies = (state) => state.moviesStore.movies;
export const getAllSeries = (state) => state.moviesStore.series;
export const getSelectedMovieOrSerie = (state) => state.moviesStore.selectedMovieOrSerie;
export default movieSlice.reducer;