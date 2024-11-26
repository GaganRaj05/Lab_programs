import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default function NavBar(params) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginBottom:"0"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SDM POLYTECHNIC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/home"className='nav-link'>Home</Link>
              <Link to="/about" className='nav-link'>About</Link>
              <Link to="/contact" className='nav-link'>Contact</Link>
      
            </div>
          </div>
        </div>
      </nav>
      
    );
};
