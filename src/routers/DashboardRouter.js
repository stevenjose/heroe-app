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
          <Route exact path="/marvel" component={MarvelScreen} />
          //TODO ruta que recibe parametros
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/hero/{$id}" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Route exact path="/" component={MarvelScreen} />
        </Switch>
      </div>
    </>
  );
};
