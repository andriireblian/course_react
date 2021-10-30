import React from "react";
import PropTypes from 'prop-types'
import "./ResultCount.scss"

export const ResultCount = ({filmsCount}) => {
    return (
        <div className="movie-section__count">
            <p>
                <span>{filmsCount}</span> movies found
            </p>
        </div>
    )
}

ResultCount.propTypes = {
    filmsCount: PropTypes.number
}

export default ResultCount;

