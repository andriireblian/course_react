import React from "react";
import { PropTypes } from 'prop-types';
import './MovieItem.scss';

function MovieItem(props) {
    return (
        <li className="movie-list__item">
            <div className="movie-list__thumbnail">
                <img src={props.img} alt="Image"/>
            </div>
            <div className="movie-list__dots hide">
                <div className="movie-list__dots-item"></div>
            </div>
            <div className="movie-list__description">
                <span className="movie-list__description-title">{props.title}</span>
                <span className="movie-list__description-year">{props.year}</span>
            </div>
            <p className="movie-list__genre">{props.genre}</p>
        </li>
    );
}

MovieItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string
};

export default MovieItem;