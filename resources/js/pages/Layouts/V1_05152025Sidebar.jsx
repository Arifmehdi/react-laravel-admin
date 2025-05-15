import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const baseUrl = window.location.origin;
const fallbackLogo = `${baseUrl}/assets/backend/dist/img/logo.jpg`;
const fallbackUser = `${baseUrl}/assets/backend/dist/img/user_logo.png`;

const logo = `${baseUrl}/admin/public/assets/backend/dist/img/logo.jpg`;
const user = `${baseUrl}/admin/public/assets/backend/dist/img/user_logo.png`;

function SideBar() {
    // const [categoriesExpanded, setCategoriesExpanded] = useState(false);
    const [blogExpanded, setBlogExpanded] = useState(false);
    const [researchExpanded, setResearchExpanded] = useState(false);
    const [beyondExpanded, setBeyondExpanded] = useState(false);
    const [newsInnovationExpanded, setNewsInnovationExpanded] = useState(false);

    const [username, setUsername] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [logoSrc, setLogoSrc] = useState(logo);
    const [userSrc, setUserSrc] = useState(user);

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };


    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img
                    src={logoSrc}
                    onError={() => setLogoSrc(fallbackLogo)}
                    alt="Best Dream Car Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}
                />
                <span className="brand-text font-weight-light">Best Dream Car</span>
            </Link>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src={userSrc}
                            onError={() => setUserSrc(fallbackUser)}
                            alt="User"
                            className="img-circle elevation-2"
                        />
                    </div>
                    <div className="info">
                        <Link to="/" className="d-block">{username || 'User'}</Link>
                    </div>
                </div>

                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open">
                            <Link to="/" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={toggleMenu}>
                                <i className="nav-icon fas fa-boxes"></i> {/* Changed to more appropriate inventory icon */}
                                <p>
                                    Inventories
                                    <i
                                        className="fas fa-angle-left right"
                                        style={{
                                            transform: isExpanded ? 'rotate(90deg)' : 'none',
                                            transition: 'transform 0.2s ease',
                                        }}
                                    ></i>
                                    <span className="badge badge-info right">6</span>
                                </p>
                            </a>
                            <ul className="nav nav-treeview" style={{
                                display: isExpanded ? 'block' : 'none',
                                paddingLeft: '15px' /* Added left padding for nested menu */
                            }}>
                                <li className="nav-item">
                                    <Link to="/inventory" className="nav-link">
                                        <i className="fas fa-box-open nav-icon"></i> {/* Inventory-specific icon */}
                                        <p>Inventory</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/boxed" className="nav-link">
                                        <i className="fas fa-archive nav-icon"></i> {/* Box-specific icon */}
                                        <p>Boxed</p>
                                    </a>
                                </li>
                                {/* Additional nested example */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); setCategoriesExpanded(!categoriesExpanded); }}>
                                        <i className="fas fa-tags nav-icon"></i>
                                        <p>
                                            Categories
                                            <i className={`fas fa-angle-left right ${categoriesExpanded ? 'rotate-90' : ''}`}></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview" style={{
                                        display: categoriesExpanded ? 'block' : 'none',
                                        paddingLeft: '30px' /* Deeper nesting gets more padding */
                                    }}>
                                        <li className="nav-item">
                                            <a href="/categories/electronics" className="nav-link">
                                                <i className="fas fa-microchip nav-icon"></i>
                                                <p>Electronics</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/categories/clothing" className="nav-link">
                                                <i className="fas fa-tshirt nav-icon"></i>
                                                <p>Clothing</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-header">Frontend</li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">
                                <i className="nav-icon far fa-calendar-alt"></i>
                                <p>
                                    Blog
                                    <span className="badge badge-info right">2</span>
                                </p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => setBlogExpanded(!blogExpanded)}>
                                <i className="nav-icon fas fa-blog"></i>
                                <p>
                                    Blog
                                    <i className={`fas fa-angle-left right ${blogExpanded ? 'rotate-90' : ''}`}></i>
                                </p>
                            </a>

                            <ul className="nav nav-treeview" style={{
                                display: blogExpanded ? 'block' : 'none',
                                paddingLeft: '15px'
                            }}>

                                {/* Blog > Research */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link" onClick={(e) => {
                                        e.preventDefault();
                                        setResearchExpanded(!researchExpanded);
                                    }}>
                                        <i className="far fa-file-alt nav-icon"></i>
                                        <p>
                                            Research
                                            <i className={`fas fa-angle-left right ${researchExpanded ? 'rotate-90' : ''}`}></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview" style={{
                                        display: researchExpanded ? 'block' : 'none',
                                        paddingLeft: '25px'
                                    }}>
                                        <li className="nav-item">
                                            <a href="/blog/research/auto-news" className="nav-link">
                                                <i className="fas fa-newspaper nav-icon"></i>
                                                <p>Auto News</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/blog/research/tools" className="nav-link">
                                                <i className="fas fa-tools nav-icon"></i>
                                                <p>Tools & Advice</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/blog/research/buying" className="nav-link">
                                                <i className="fas fa-car nav-icon"></i>
                                                <p>Car Buying Advice</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/blog/research/tips" className="nav-link">
                                                <i className="fas fa-lightbulb nav-icon"></i>
                                                <p>Car Tips</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Blog > Beyond Car */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link" onClick={(e) => {
                                        e.preventDefault();
                                        setBeyondExpanded(!beyondExpanded);
                                    }}>
                                        <i className="far fa-paper-plane nav-icon"></i>
                                        <p>
                                            Beyond Car
                                            <i className={`fas fa-angle-left right ${beyondExpanded ? 'rotate-90' : ''}`}></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview" style={{
                                        display: beyondExpanded ? 'block' : 'none',
                                        paddingLeft: '25px'
                                    }}>

                                        {/* Beyond Car > News Innovation */}
                                        <li className="nav-item">
                                            <a href="#" className="nav-link" onClick={(e) => {
                                                e.preventDefault();
                                                setNewsInnovationExpanded(!newsInnovationExpanded);
                                            }}>
                                                <i className="fas fa-bolt nav-icon"></i>
                                                <p>
                                                    News Innovation
                                                    <i className={`fas fa-angle-left right ${newsInnovationExpanded ? 'rotate-90' : ''}`}></i>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview" style={{
                                                display: newsInnovationExpanded ? 'block' : 'none',
                                                paddingLeft: '35px'
                                            }}>
                                                <li className="nav-item">
                                                    <a href="/blog/beyond/news" className="nav-link">
                                                        <i className="far fa-newspaper nav-icon"></i>
                                                        <p>News</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/blog/beyond/innovation" className="nav-link">
                                                        <i className="fas fa-cogs nav-icon"></i>
                                                        <p>Innovation</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/blog/beyond/opinion" className="nav-link">
                                                        <i className="fas fa-comment-alt nav-icon"></i>
                                                        <p>Opinion</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="/blog/beyond/financial" className="nav-link">
                                                        <i className="fas fa-chart-line nav-icon"></i>
                                                        <p>Financial</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Beyond Car > Other Categories */}
                                        <li className="nav-item">
                                            <a href="/blog/beyond/technology" className="nav-link">
                                                <i className="fas fa-microchip nav-icon"></i>
                                                <p>Technology</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-header">Other</li>
                        <li className="nav-item">
                            <Link to="/blank" className="nav-link">
                                <i className="nav-icon fas fa-file"></i>
                                <p>Blank</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideBar;
