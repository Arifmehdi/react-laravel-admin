import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const baseUrl = window.location.origin;
const fallbackLogo = `${baseUrl}/assets/backend/dist/img/logo.jpg`;
const fallbackUser = `${baseUrl}/assets/backend/dist/img/user_logo.png`;

const logo = `${baseUrl}/admin/public/assets/backend/dist/img/logo.jpg`;
const user = `${baseUrl}/admin/public/assets/backend/dist/img/user_logo.png`;

function SideBar() {
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
      <a href="/" className="brand-link">
        <img
          src={logoSrc}
          onError={() => setLogoSrc(fallbackLogo)}
          alt="Best Dream Car Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Best Dream Car</span>
      </a>

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
              <Link  className="nav-link" onClick={toggleMenu}>
                <i className="nav-icon fas fa-copy"></i>
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
              </Link>
              <ul className="nav nav-treeview" style={{ display: isExpanded ? 'block' : 'none' }}>
                <li className="nav-item">
                  <Link to="/inventory" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inventory</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Boxed</p>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-header">Frontend</li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon far fa-calendar-alt"></i>
                <p>
                  Blog
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
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
