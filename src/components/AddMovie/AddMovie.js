import React from "react";
import {Button} from "react-bootstrap";
import './AddMovie.scss';

function AddMovie() {
    return (
        <>
            <div className="btn-container">
                <Button variant="secondary">+ Add movie</Button>{' '}
            </div>
        </>
    );
}
export default AddMovie;