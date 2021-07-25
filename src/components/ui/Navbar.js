import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

export const Navbar = () => {
  const {user:{name}} = useContext(AuthContext);
  
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/dc"
              >
                DC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          
          <div className="mt-2">
            <span className="text-primary">User: { name }</span>
          </div>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link float-right"
            exact
            to="/login"
          >
            Logout
          </NavLink>

         
        </form>
      </div>
    </nav>
  );
};
