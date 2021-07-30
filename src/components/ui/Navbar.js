import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleOnclik = () => {
    dispatch({
      type: types.logout,
      payload: {
        logged: false,
      },
    });
    history.replace("/heroe-app/login");
  };

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
                to="/heroe-app/marvel"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/heroe-app/dc"
              >
                DC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/heroe-app/search"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <div className="mt-2">
            <span className="text-primary">User: {name}</span>
          </div>

          <button
            className="nav-item nav-link btn"
            onClick={handleOnclik}
            type="button"
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
};
