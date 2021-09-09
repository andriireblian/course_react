import React, {useState, useEffect, useRef} from "react";
import {Dropdown, DropdownButton} from 'react-bootstrap'
import './SortBy.scss';

function SortBy() {
    const [apiData, setApiData] = React.useState([]);
    const [fetchUrl, setFetchUrl] = React.useState('');

    React.useEffect(() => {
        if (fetchUrl) {
            fetch(fetchUrl)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setApiData(data);
                });
        }
    }, [fetchUrl]);

    return (
        <div className="sort-by">
            <span className="sort-by__title">Sort By</span>
            <Dropdown className="d-inline sort-by__dropdown" onSelect={(e)=>{setFetchUrl(e.target.eventKey)}}>
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="secondary">
                    Release Date
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey='API_Link1'>Menu Item</Dropdown.Item>
                    <Dropdown.Item eventKey='API_Link2'>Menu Item</Dropdown.Item>
                    <Dropdown.Item eventKey='API_Link3'>Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
export default SortBy;