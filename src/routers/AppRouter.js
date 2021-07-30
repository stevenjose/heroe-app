import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/ui/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

  const {user} = useContext(AuthContext);

    return (
        <Router>
          <div>
            <Switch>
                <PublicRouter 
                  exact
                  path="/heroe-app/login" 
                  component={ LoginScreen } 
                  isAuthenticated={user.logged}
                />

                <PrivateRouter 
                      path="/" 
                      component={ DashboardRouter }
                      isAuthenticated={user.logged}
                /> 

            </Switch>
          </div>
        </Router>
      );
}
