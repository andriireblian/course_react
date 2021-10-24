import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Dropdown, CloseButton, Button} from "react-bootstrap";
import './MovieItem.scss';
import EditMovieModal from "../EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";
import DropDownMenu from "../DropDownMenu/DropDownMenu";


export const MovieItem = ({movie}) => {
    const {poster_path, title, release_date, genres, vote_average, id} = movie;

    return (
        <>
            <Link to={`/film/${id}`} className="film-item">
                <li className="movie-list__item">
                    <div className="movie-list__thumbnail">
                        <img src={poster_path} alt="Image"/>
                    </div>
                    <DropDownMenu item={movie} />
                    <div className="movie-list__description">
                        <span className="movie-list__description-title">{title}</span>
                        <div>
                            <span className="movie-list__description-year">{release_date}</span>
                            <span className="movie-list__description-year">{vote_average}</span>
                        </div>
                    </div>
                    <p className="movie-list__genre">
                        {genres.map((item, i) => (<span key={i}>{item}</span>))}
                    </p>
                </li>
            </Link>

            {/*<EditMovieModal
                show={EditModalShow}
                onHide={() => setEditModalShow(false)}
            />

            <DeleteMovieModal
                show={DeleteModalShow}
                onHide={() => setDeleteModalShow(false)}
            />*/}
        </>
    );
}

MovieItem.propTypes = {
    movie: PropTypes.object,
}

export default MovieItem;