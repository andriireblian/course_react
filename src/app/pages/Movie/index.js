import {Col, Container, Row} from "react-bootstrap";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import MovieSection from "../../components/MovieSection/MovieSection";
import Footer from "../../components/Footer/Footer";
import React from "react";


const Movie = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <MovieDetails/>
                    <ErrorBoundary>
                        <MovieSection/>
                    </ErrorBoundary>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

export default Movie;