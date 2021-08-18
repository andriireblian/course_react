import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Header.scss';
import AddMovie from "../AddMovie/AddMovie";
import SearchMovie from "../SearchMovie/SearchMovie";

function Header() {
    return (
        <Row>
            <Col>
                <div className="top-container">
                    <div className="bg-image"></div>
                    <div className="logo">
                        <a href="#">
                            <span>netflix</span>roulette
                        </a>
                    </div>
                    <h2 className="top-title">Find your movie</h2>
                    <AddMovie />
                    <SearchMovie />
                </div>
            </Col>
        </Row>
    );
}
export default Header;