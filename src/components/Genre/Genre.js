import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Genre.scss';

function Genre() {
    return (
        <ul className="category-list">
            <li className="category-list__item">
                <a href="#">All</a>
            </li>
            <li className="category-list__item">
                <a href="#">Documentary</a>
            </li>
            <li className="category-list__item">
                <a href="#">Comedy</a>
            </li>
            <li className="category-list__item">
                <a href="#">Horror</a>
            </li>
            <li className="category-list__item">
                <a href="#">Crime</a>
            </li>
        </ul>
    );
}
export default Genre;