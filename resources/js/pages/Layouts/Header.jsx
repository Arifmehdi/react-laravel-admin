import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Header() {
    const navigate = useNavigate();
    // State for dropdown visibility
    const [messagesDropdownOpen, setMessagesDropdownOpen] = useState(false);
    const [notificationsDropdownOpen, setNotificationsDropdownOpen] = useState(false);

    // Refs for the dropdown containers
    const messagesRef = useRef(null);
    const notificationsRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (messagesRef.current && !messagesRef.current.contains(event.target)) {
                setMessagesDropdownOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setNotificationsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMessagesDropdown = (e) => {
        e.preventDefault();
        setMessagesDropdownOpen(!messagesDropdownOpen);
        setNotificationsDropdownOpen(false);
    };

    const toggleNotificationsDropdown = (e) => {
        e.preventDefault();
        setNotificationsDropdownOpen(!notificationsDropdownOpen);
        setMessagesDropdownOpen(false);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">Contact</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link" onClick={handleLogout}>Logout</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i className="fas fa-search"></i>
                    </a>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                {/* Messages Dropdown */}
                <li className="nav-item dropdown" ref={messagesRef}>
                    <a className="nav-link" href="#" onClick={toggleMessagesDropdown}>
                    <i className="far fa-comments"></i>
                    <span className="badge badge-danger navbar-badge">3</span>
                    </a>
                    <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${messagesDropdownOpen ? 'show' : ''}`}>
                    <a href="#" className="dropdown-item">
                        <div className="media">
                        <img alt="User Avatar" className="img-size-50 mr-3 img-circle" data-cfsrc="dist/img/user1-128x128.jpg" style={{display:"none",visibility:"hidden"}}/><noscript>
                            <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/></noscript>
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                            </h3>
                            <p className="text-sm">Call me whenever you can...</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <div className="media">
                        <img alt="User Avatar" className="img-size-50 img-circle mr-3" data-cfsrc="dist/img/user8-128x128.jpg" style={{display:"none",visibility:"hidden"}}/><noscript>
                            <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/></noscript>
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                            </h3>
                            <p className="text-sm">I got your message bro</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <div className="media">
                        <img alt="User Avatar" className="img-size-50 img-circle mr-3" data-cfsrc="dist/img/user3-128x128.jpg" style={{display:"none",visibility:"hidden"}}/>
                        <noscript><img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/></noscript>
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                            </h3>
                            <p className="text-sm">The subject goes here</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </li>
                {/* Notifications Dropdown */}
                <li className="nav-item dropdown" ref={notificationsRef}>
                    <a className="nav-link"  href="#" onClick={toggleNotificationsDropdown}>
                    <i className="far fa-bell"></i>
                    <span className="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${notificationsDropdownOpen ? 'show' : ''}`}>
                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-envelope mr-2"></i> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-users mr-2"></i> 8 friend requests
                        <span className="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-file mr-2"></i> 3 new reports
                        <span className="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i className="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                        <i className="fas fa-th-large"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
