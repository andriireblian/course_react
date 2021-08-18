import React from "react";
import './MovieSection.scss';
import Genre from "../Genre/Genre";
import SortBy from "../SortBy/SortBy";
import MovieList from "../MovieList/MovieList";

function MovieSection() {
    return (
        <div className="movie-section">
            <div className="movie-section__filter">
                <Genre />
                <SortBy />
            </div>
            <div className="movie-section__count">
                <p>
                    <span>39</span> movies found
                </p>
            </div>
            <div className="movie-section__list">
                <MovieList />
            </div>
        </div>
    );
}
export default MovieSection;