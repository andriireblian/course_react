import React from "react";
import './MovieSection.scss';
import Genre from "../Genre/Genre";
import SortBy from "../SortBy/SortBy";
import MovieList from "../MovieList/MovieList";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function MovieSection() {
    return (
        <>
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
                    <ErrorBoundary>
                        <MovieList />
                    </ErrorBoundary>
                </div>
            </div>
        </>
    );
}
export default MovieSection;