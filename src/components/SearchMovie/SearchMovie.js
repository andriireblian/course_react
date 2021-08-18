import React from "react";
import {Form, Button, Col, Row} from "react-bootstrap";
import './SearchMovie.scss';

function SearchMovie() {
    return (
        <div className="search-form">
            <Form>
                <Row>
                    <Col xs={8}>
                        <Form.Control placeholder="What do you want to watch?" />
                    </Col>
                    <Col xs={4}>
                        <Button type="submit" className="search-btn">Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
export default SearchMovie;