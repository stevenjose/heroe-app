import React, { useEffect, useMemo, useState } from "react";

import queryString from "query-string";

import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { CardHero } from "../heroes/CardHero";
import { useLocation } from "react-router";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchScreen = ({history}) => {
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  
  const [ formValues, handleInputChange ] = useForm( {
    heroSearch: q,
    heroPrueba: ''
  } );
  const { heroSearch } = formValues;

  const [heroPrueba , setInputPrueba] = useState({value: ''});
  
  const heoresFilter  = useMemo(() => getHeroByName(q), [q]);

  //TODO cambiar estado de un input 
  /* const handleInputChangePrueba = (event) => {
      setInputPrueba({value: event.target.value});
  } */
  

  const handleOnSubmit = (event) => {
      event.preventDefault();
      history.push(`?q=${heroSearch}`);
  }


  return (
    <div className="row mt-4">
      <div className="col-4">
        <h3>Search Form</h3>
        <hr />
        <form onSubmit={handleOnSubmit} >
          <input
            className="form-control"
            name="heroSearch"
            value={heroSearch}
            onChange={handleInputChange}
            placeholder="Find your Heroe"
          ></input>
          <button
            className="form-control btn mt-2  btn-block btn-outline-primary"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="col-8">
        <h3>Result</h3>
        <div className="card-deck animate_animated animate__fadeOut">
          <div className="row no-gutters">
            {heoresFilter.map((hero) => (
              <CardHero key={hero.id} {...hero} />
            ))}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
