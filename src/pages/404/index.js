import React from 'react';
import Footer from "../../components/Footer/Footer";
import {Button} from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

import './styles.scss'

const PageNotFound = () => {

    return (
        <>
            <div className='page-404'>
                <Container>
                    <Row>
                        <Col>
                            <Link to='/' className='page-404_link'>
                                <Button title='Go back to home'/>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default PageNotFound;