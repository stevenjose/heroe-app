import React from "react";
import { Link } from "react-router-dom";

export const CardHero = ({
  id,
  publisher,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col-md-4 mt-4">
      <div className="card ms-3">
        <img
          className="card-img-top"
          src={`./heroe-app/assets/heroes/${id}.jpg`}
          alt={publisher}
        />
        <div className="card-body">
          <h5 className="card-title"> {superhero} </h5>
          <p className="card-text">
              { alter_ego }
          </p>
          {
              (alter_ego !== characters ) && <p className="card-text"> {characters} </p>
          }
          <p className="card-text"> <small className="text-muted">{first_appearance}</small> </p>
          <Link to={`./hero/${ id }`}>
          Mas...
          </Link>
        </div>
      </div>
    </div>
  );
};
