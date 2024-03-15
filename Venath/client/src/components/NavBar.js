import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black' }}>
        <div className="container">

          <a className="navbar-brand" href="/" style={{ color: 'red' }}>Born To Battle</a>
{/*           
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
              <NavLink className="nav-link" exact="true" to="/home" style={{ color: 'white' }}>Home</NavLink>

              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contestants" style={{ color: 'white' }}>Contestants</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{ color: 'white' }}>Events</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery" style={{ color: 'white' }}>Gallery</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/faq" style={{ color: 'white' }}>FAQ</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" style={{ color: 'white' }}>Contact</NavLink>
              </li>


              <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile" style={{ color: 'white' }}>
                  <i className="fa-solid fa-user"></i> Profile
                </NavLink>
              </li>
            </ul>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
