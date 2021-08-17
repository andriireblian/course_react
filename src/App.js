import React from "react";
import './styles/common.scss';
import './styles/reset.scss';
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Header from "./components/Header/Header";
import MovieSection from "./components/MovieSection/MovieSection";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Header />
                        <MovieSection />
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default App;