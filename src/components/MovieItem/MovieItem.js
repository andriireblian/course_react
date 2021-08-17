import React from "react";
import './MovieItem.scss';

function MovieItem({img, title, year, genre}) {
    return (
        <>
            <li className="movie-list__item">
                <div className="movie-list__thumbnail">
                    <img src={img} alt="Image"/>
                </div>
                <div className="movie-list__dots hide">
                    <div className="movie-list__dots-item"></div>
                </div>
                <div className="movie-list__description">
                    <span className="movie-list__description-title">{title}</span>
                    <span className="movie-list__description-year">{year}</span>
                </div>
                <p className="movie-list__genre">{genre}</p>
            </li>
        </>
    );
}
export default MovieItem;