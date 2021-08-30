import React, {useState} from "react";
import {Modal, Button, Col, Form, Row} from "react-bootstrap";

const EditMovieForm = ({ onSubmit }) => {
    const [id, setID] = useState("");
    const [title, setTitle] = useState("");
    const [date, setReleaseDate] = useState("");
    const [url, setUrl] = useState("");
    const [setGenre] = useState("");
    const [runtime, setRuntime] = useState("");
    const [overview, setOverview] = useState("");

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formEditMovieID">
                <Form.Label>Movie ID</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="MO32820TH"
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEditMovieTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Moana"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEditMovieReleaseDate">
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setReleaseDate(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEditMovieUrl">
                <Form.Label>Movie URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="www.moana.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEditMovieGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(e) => setGenre(e.target.value)}>>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formEditMovieOverview">
                <Form.Label>Overview</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Overview text goes here"
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEditMovieRuntime">
                <Form.Label>Runtime</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Runtime text goes here"
                    value={runtime}
                    onChange={(e) => setRuntime(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formGridCity" className="btn-group">
                <Button variant="outline-danger" type="submit">
                    Reset
                </Button>
                <Button variant="danger" type="submit">
                    Save
                </Button>
            </Form.Group>
        </Form>
    );
};

function EditMovieModal(props) {
    const onEditFormSubmit = (e) => {
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
                    Edit Movie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditMovieForm onSubmit={onEditFormSubmit} />
            </Modal.Body>
        </Modal>
    );
}

export default EditMovieModal;