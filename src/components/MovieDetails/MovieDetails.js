import React, {useState, useEffect, useRef} from "react";
import { PropTypes } from 'prop-types';
import {Dropdown, CloseButton, Button, Row, Col} from "react-bootstrap";
import './MovieDetails.scss';
import SearchBtn from "../SearchBtn/SearchBtn";

function MovieDetails(props) {
    return (
        <>
            <Row>
                <Col>
                    <div className="top-container movie-details">
                        <div className="bg-image"></div>
                        <div className="movie-details__container">
                            <div className="logo">
                                <a href="#">
                                    <span>netflix</span>roulette
                                </a>
                            </div>

                            <SearchBtn />

                            <Row>
                                <Col xs={3}>
                                    <div className="movie-details__banner">
                                        <img src="https://cdn.europosters.eu/image/1300/posters/pulp-fiction-uma-on-the-bed-i8102.jpg" alt="Image"/>
                                    </div>
                                </Col>
                                <Col xs={9}>
                                    <div className="movie-details__title">
                                        <h2>Pulp Fiction</h2>
                                        <span className="movie-details__title-rating">4.3</span>
                                    </div>
                                    <p className="movie-details__oscar">Oscar winning Movie</p>
                                    <div className="movie-details__time">
                                        <span className="movie-details__time-year">1994</span>
                                        <span className="movie-details__time-duration">154 min</span>
                                    </div>
                                    <div className="movie-details__description">
                                        Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story
                                        by Tarantino and Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames,
                                        and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines
                                        and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default MovieDetails;