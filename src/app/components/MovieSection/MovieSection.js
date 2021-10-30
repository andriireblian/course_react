import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './MovieSection.scss';
import Genre from "../Genre/Genre";
import SortBy from "../SortBy/SortBy";
import MovieList from "../MovieList/MovieList";
import ResultCount from "../ResultCount/ResultCount";
import {getMovieThunk} from "../../store/thunks/movies";

function MovieSection(props) {
    const getMovieDispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        getMovieDispatch(getMovieThunk());
    }, [getMovieDispatch])

    return (
        <div className="movie-section">
            <div className="movie-section__filter">
                <Genre />
                <SortBy />
            </div>
            <ResultCount filmsCount={state.movies.length} />
            <div className="movie-section__list">
                <MovieList searchResult={state.movies} />
            </div>
        </div>
    );
}
export default MovieSection;