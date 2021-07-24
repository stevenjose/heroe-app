import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/ui/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route exact component={ DashboardRouter } /> 
            </Switch>
          </div>
        </Router>
      );
}
