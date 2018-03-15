import React, {Component} from 'react';
// import {NavLink} from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-info">
        <a className="navbar-brand" href="#">
          Navaera
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item pt-2 ">
            <a onClick={this.props.toggleMenu} >
            <i className="fa fa-bars text-white" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
