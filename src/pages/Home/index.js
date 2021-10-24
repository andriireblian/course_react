import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import MovieSection from "../../components/MovieSection/MovieSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModalManager from "../../components/Modal/ModalManager/ModalManager";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Header/>
                    <ErrorBoundary>
                        <MovieSection/>
                    </ErrorBoundary>
                    <Footer/>
                    <ModalManager/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;