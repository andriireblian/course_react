import React, {useState, useEffect, useRef} from "react";
import {Dropdown, DropdownButton} from 'react-bootstrap'
import './SortBy.scss';
import {sortingTypes} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {filterMovieThunk, sortMovieThunk} from "../../store/thunks/movies";

function SortBy() {
    const [apiData, setApiData] = React.useState([]);
    const [fetchUrl, setFetchUrl] = React.useState('');
    const {filter, sortBy} = useSelector((state) => state);
    const sortMovieDispatch = useDispatch();

    const sortingItems = Object.keys(sortingTypes).map(key => (
        <option key={key} value={sortingTypes[key]}>{key.toUpperCase()}</option>
    ))

    const handleChangeSelect = (e) => {
        sortMovieDispatch(sortMovieThunk(e.target.value))
    }

    return (
        <div className="sort-by">
            <span className="sort-by__title">Sort By</span>
            <select className="d-inline sort-by__dropdown" name="sortBy" id="sortBy" value={sortBy} onChange={handleChangeSelect}>
                {sortingItems}
            </select>
        </div>
    );
}
export default SortBy;