import React from "react"
import {Modal} from "../Modal";
import {Button} from "../../Button/Button";
//import {Dropdown, CloseButton, Button} from "react-bootstrap";
import {FormModal} from "../FormModal/FormModal";
import {useDispatch, useSelector} from "react-redux";
import {modalTypes} from "../../../constants";
import {deleteMovieThunk} from "../../../store/thunks/movies";
import {Col, Container, Form, Row} from "react-bootstrap";


export const ModalManager = () => {
    const deleteMovieDispatch = useDispatch();
    const openModal = useSelector(({openModal}) => openModal);

    const handleDeleteForm = (e) => {
        e.preventDefault();
        deleteMovieDispatch(deleteMovieThunk(openModal.movie))
    };

    return (
        <>
            <Modal isOpen={openModal.name === modalTypes.deleteModal}
                   title="Delete"
                   subtitle="Are you sour you wont to delete this movie?">
                <form onSubmit={handleDeleteForm}>
                    <div className="button-wrapper">
                        <Button title="Confirm" type="submit"/>
                    </div>
                </form>
            </Modal>
            <Modal isOpen={openModal.name === modalTypes.addModal} title="Add movie">
                <FormModal />
            </Modal>
            <Modal isOpen={openModal.name === modalTypes.editModal} title="Edit movie">
                <FormModal />
            </Modal>
        </>
    )
}

export default ModalManager;