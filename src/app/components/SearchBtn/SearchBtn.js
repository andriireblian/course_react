import React, {useState, useEffect, useRef, useCallback} from "react";
import { PropTypes } from 'prop-types';
import {Dropdown, CloseButton, Button, Row, Col} from "react-bootstrap";
import Header from "../Header/Header";
import './SearchBtn.scss';

function MovieDetails(props) {
    const [showStatements, setShowStatements] = useState(false);
    const onClickSearchBtn = useCallback(
        () => setShowStatements(prevShow => !prevShow)
    );

    return (
        <>
            <div className="search">
                <Button variant="link" className="search-btn" onClick={onClickSearchBtn}></Button>
            </div>

            { showStatements ? console.log('test') : null }
        </>
    );
}

export default MovieDetails;