import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './style.scss';
import Login from "../../features/Auth/components/Login/Login";
import Register from '../../features/Auth/components/Register/Register';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/Auth/userSlice";

const Header = props => {
    const [showLogin, setShowLogin] = useState('');
    const [showRegister, setShowRegister] = useState('');

    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!loggedInUser.id;

    let dispatch = useDispatch();

    const MODE = {
        REGISTER: "register",
        LOGIN: "login",
    };
    const [mode, setMode] = useState(MODE.LOGIN);
    const openLogin = () => {
        setShowLogin('show');
    }
    const openRegister = () => {
        setShowRegister('show');
    };
    const closeLogin = () => {
        setShowLogin('');
    }
    const closeRegister = () => {
        setShowRegister('');
    }
    const handleLogoutClick = () => {
        let action = logout();
        dispatch(action);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Anrakutei
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex">

                        {!isLoggedIn && (
                            <>
                                <button type="button" className="btn btn-success" onClick={openLogin}>
                                    Login
                                </button>
                                <span className="ms-3 me-3">/</span>
                                <button type="button" className="btn btn-danger ml-3" onClick={openRegister}>
                                    Register
                                </button>
                            </>
                        )}
                        {isLoggedIn && (
                            <>
                                <span class="navbar-text">
                                    <a class="nav-link" href="#">{loggedInUser.fullName}</a>
                                </span>
                                <span class="navbar-text">
                                    <button type="button" className="btn btn-success ml-3" onClick={handleLogoutClick}>
                                        Log out
                                    </button>
                                </span>
                            </>
                        )}
                    </div>
                    <div className={`modal fade ${showLogin}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" aria-label="Close" onClick={closeLogin}></button>
                                </div>
                                <div className="modal-body">
                                    <Login closeDialog={closeLogin} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={`modal fade ${showRegister}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" aria-label="Close" onClick={closeRegister}></button>
                                </div>
                                <div className="modal-body">
                                    <Register closeDialog={closeRegister} />
                                </div>

                            </div>
                        </div>
                    </div>
                    {showRegister === 'show' && (<div className="modal-backdrop fade show"></div>)}
                    {showLogin === 'show' && (<div className="modal-backdrop fade show"></div>)}
                </div>
            </nav>
        </>
    )
}

Header.propTypes = {

}

export default Header
