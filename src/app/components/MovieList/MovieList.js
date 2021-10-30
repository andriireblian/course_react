import React from "react";
import PropTypes from 'prop-types'
import './MovieList.scss';
import MovieItem from "../MovieItem/MovieItem";

export const MovieList = ({searchResult}) => {

    return (
        <ul className="movie-list">
                {searchResult.map((item, i) => (
                    <MovieItem key={item.id}
                               movie={item} />
                ))}
        </ul>
    )
}

MovieList.propTypes = {
    searchResult: PropTypes.array
}

export default MovieList;