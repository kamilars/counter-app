import React, { Component } from "react";

// Stateless Functional Component (not a class, but function without state)
// sfc shortcut
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// this.props only works in class component
// in functional, props paramater* needed
// this.props => props
// props => {needed properties,}

export default NavBar;
