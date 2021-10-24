import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {searchMovieThunk} from "../../store/thunks/movies";
import history from 'history/browser';
import {useQuery} from '../../hooks/useQuery'
import './SearchMovie.scss';

function SearchMovie() {
    const dispatch = useDispatch();
    const query = useQuery();

    useEffect(() => {
        const search = query.get('search')
        dispatch(searchMovieThunk(search))
    }, [dispatch]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const {target: {search: {value}}} = event
        if (!value) return;

        history.push({
            pathname: '/search',
            search: `?search=${value}`
        })

        dispatch(searchMovieThunk(value))
    }

    return (
        <div className="search-form">
                <Row>
                    <Col xs={8}>
                        <form className="search" onSubmit={handleSearchSubmit}>
                            <Input type="text" title="Find your movie..." name='search'/>
                            <Button title="SEARCH" className="search-btn" style="button--accent"/>
                        </form>
                    </Col>
                    <Col xs={4}>

                    </Col>
                </Row>

        </div>
    );
}
export default SearchMovie;