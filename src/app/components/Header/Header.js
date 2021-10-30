import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Header.scss';
import AddMovie from "../AddMovie/AddMovie";
import SearchMovie from "../SearchMovie/SearchMovie";
import {Link} from "react-router-dom";


function Header() {
    return (
        <Row>
            <Col>
                <div className="top-container">
                    <div className="bg-image"></div>
                    <Link to='/' className="logo">
                        <span>netflix</span>roulette
                    </Link>
                    <h2 className="top-title">Find your movie</h2>
                    <AddMovie />
                    <SearchMovie />
                </div>
            </Col>
        </Row>
    );
}
export default Header;