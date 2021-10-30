import React, {useState} from "react";
import {Modal, Button, Container, Col, Form, Row} from "react-bootstrap";
import './DeleteMovieModal.scss';

const DeleteMovieForm = ({ onSubmit }) => {

    return (
        <Form onSubmit={onSubmit}>
            <Container className="delete-modal-content">
                <Row>
                    <Col>
                        <div className="delete-modal__text">Are you sure you want to delete this movie?</div>
                    </Col>
                </Row>
                <Row>
                    <Col className="delete-movie-container">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Button variant="danger" type="submit">
                                Confirm
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
};

function DeleteMovieModal(props) {
    const onDeleteFormSubmit = (e) => {
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
            <Modal.Header className="delete-modal" closeButton closeVariant='white'>
                <Modal.Title className="delete-modal__title" id="contained-modal-title-vcenter">
                    Delete Movie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DeleteMovieForm onSubmit={onDeleteFormSubmit} />
            </Modal.Body>
        </Modal>
    );
}

export default DeleteMovieModal;