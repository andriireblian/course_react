import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {filterMovieThunk, sortMovieThunk} from "../../store/thunks/movies";
import {genresTypes, sortingTypes} from "../../constants";
import './Genre.scss';

function Genre() {
    const {filter, sortBy} = useSelector((state) => state);
    const filterMovieDispatch = useDispatch();

    const handleFilterClick = (event) => {
        event.preventDefault();
        const {target: {dataset: {filter}}} = event
        filterMovieDispatch(filterMovieThunk(filter));
    }

    const filterItems = genresTypes.map((item, key) => (
        <li className={`category-list__item ${filter === item ? 'active' : null}`} key={key}>
            <a href="#" data-filter={item} onClick={handleFilterClick}>{item}</a>
        </li>
    ))

    return (
        <ul className="category-list">
            {filterItems}
        </ul>
    );
}
export default Genre;