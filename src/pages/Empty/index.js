import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModalManager from "../../components/Modal/ModalManager/ModalManager";
import './styles.scss'

const EmptyPage = () => {

    return (
        <>
            <Header/>
            <main className='empty-page'>
                <Container>
                    <Row>
                        <Col>
                          <h3>No Movie Found</h3>
                        </Col>
                    </Row>
                </Container>
            </main>
            <footer>
                <Footer/>
            </footer>
            <ModalManager/>
        </>
    )
};

export default EmptyPage;