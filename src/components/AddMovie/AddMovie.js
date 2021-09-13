import React, { useState } from "react";
import {Modal, Button, Form, Row, Col} from "react-bootstrap";
import './AddMovie.scss';

const AddMovieForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [date, setReleaseDate] = useState("");
    const [url, setUrl] = useState("");
    const [setGenre] = useState("");
    const [runtime, setRuntime] = useState("");
    const [overview, setOverview] = useState("");

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formAddMovieTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Moana"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formAddMovieReleaseDate">
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setReleaseDate(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formAddMovieUrl">
                <Form.Label>Movie URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Movie here"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formAddMovieGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(e) => setGenre(e.target.value)}>>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formAddMovieOverview">
                <Form.Label>Overview</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Overview here"
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formAddMovieRuntime">
                <Form.Label>Runtime</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Runtime here"
                    value={runtime}
                    onChange={(e) => setRuntime(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formGridCity" className="btn-group">
                <Button variant="outline-danger" type="submit">
                    Reset
                </Button>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
};

function AddMovieModal(props) {
    const onAddFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add movie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddMovieForm onSubmit={onAddFormSubmit} />
            </Modal.Body>
        </Modal>
    );
}

function AddMovie() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="btn-container">
                <Button variant="secondary" variant="primary" onClick={() => setModalShow(true)}>+ Add movie</Button>{' '}
            </div>

            <AddMovieModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default AddMovie;