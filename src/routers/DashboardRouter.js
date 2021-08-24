import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { Navbar } from "../components/ui/Navbar";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/heroe-app/marvel" component={MarvelScreen} />
          //TODO ruta que recibe parametros
          <Route exact path="/heroe-app/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/heroe-app/dc" component={DcScreen} />
          <Route exact path="/heroe-app/hero/{$id}" component={DcScreen} />
          <Route exact path="/heroe-app/search" component={SearchScreen} />

          <Route to="/heroe-app/marvel" />
        </Switch>
      </div>
    </>
  );
};
