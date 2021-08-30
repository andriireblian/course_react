import React from "react";
import { PropTypes } from 'prop-types';
import {Dropdown, CloseButton, Button} from "react-bootstrap";
import './MovieItem.scss';
import EditMovieModal from "../EditMovieModal/EditMovieModal";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";


function MovieItem(props) {
    const [EditModalShow, setEditModalShow] = React.useState(false);
    const [DeleteModalShow, setDeleteModalShow] = React.useState(false);

    return (
        <>
            <li className="movie-list__item">
                <div className="movie-list__thumbnail">
                    <img src={props.img} alt="Image"/>
                </div>
                <Dropdown className="movie-list__dots hide" autoClose="inside">
                    <Dropdown.Toggle variant="" id="dropdown-basic" className="movie-list__dots-item"><span>...</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="movie-list__dropdown-container">
                        <Dropdown.Item href="#" className="close-btn"><CloseButton variant="white"/></Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={() => setEditModalShow(true)}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => setDeleteModalShow(true)}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="movie-list__description">
                    <span className="movie-list__description-title">{props.title}</span>
                    <span className="movie-list__description-year">{props.year}</span>
                </div>
                <p className="movie-list__genre">{props.genre}</p>
            </li>

            <EditMovieModal
                show={EditModalShow}
                onHide={() => setEditModalShow(false)}
            />

            <DeleteMovieModal
                show={DeleteModalShow}
                onHide={() => setDeleteModalShow(false)}
            />
        </>
    );
}

MovieItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string
};

export default MovieItem;