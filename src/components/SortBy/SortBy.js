import React from "react";
import {Dropdown} from 'react-bootstrap'
import './SortBy.scss';

function SortBy() {
    return (
        <div className="sort-by">
            <span className="sort-by__title">Sort By</span>
            <Dropdown className="d-inline sort-by__dropdown">
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="secondary">
                    Release Date
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
export default SortBy;