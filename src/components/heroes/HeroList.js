import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { CardHero } from "./CardHero";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="card-deck">
      <div className="row no-gutters">
        {heroes.map((hero) => (
          <CardHero 
          key={hero.id} 
          {...hero} />
        ))}
      </div>
    </div>
  );
};
