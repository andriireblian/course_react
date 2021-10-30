import React, {useState} from "react";
import {Dropdown, CloseButton, Button} from "react-bootstrap";
import './DropDownMenu.scss'
import {useDispatch} from "react-redux";
import {handleModal} from "../../store/thunks/movies";
import {modalTypes} from "../../constants";

export const DropDownMenu = ({item}) => {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () => { setOpenMenu(!isOpenMenu) }
    const handleModalDispatch = useDispatch();

    const handleClickModal = (event) => {
        event.preventDefault();
        const { target: { dataset: { modal, movie }}} = event;
        console.log(modal, movie);
        if (modal && movie) handleModalDispatch(handleModal({name: modal, movie: +movie}));
    }

    return (
        /*<div className={`c-dropdown-menu ${isOpenMenu ? 'isOpen' : 'isClose'}`}>
            <button className="c-dropdown-menu__btn" onClick={handleMenuClick}>
                {isOpenMenu ? 'x' : 'menu'}
            </button>
            {
                isOpenMenu &&
                <ul>
                    <li><Button title="Edit"  data-modal={modalTypes.editModal} data-movie={item.id} onClick={handleClickModal}/></li>
                    <li><Button title="Delete" data-modal={modalTypes.deleteModal} data-movie={item.id} onClick={handleClickModal}/></li>
                </ul>
            }
        </div>*/
        <Dropdown className="movie-list__dots hide" autoClose="inside">
            <Dropdown.Toggle variant="" id="dropdown-basic" className="movie-list__dots-item"><span>...</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="movie-list__dropdown-container">
                <Dropdown.Item href="#" className="close-btn"><CloseButton variant="white"/></Dropdown.Item>
                <Dropdown.Item href="#/action-2" data-modal={modalTypes.editModal} data-movie={item.id} onClick={handleClickModal}>Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-3" data-modal={modalTypes.deleteModal} data-movie={item.id} onClick={handleClickModal}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDownMenu;