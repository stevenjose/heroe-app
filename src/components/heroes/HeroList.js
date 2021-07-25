import React , { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { CardHero } from "./CardHero";

export const HeroList = ({ publisher }) => {
  //const heroes = getHeroesByPublisher(publisher);
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  return (
    <div className="card-deck animate_animated animate__fadeOut">
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
