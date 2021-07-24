import * as React from "react";
import { useEffect, useState } from 'react';
import { Container, Typography } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import LoadingPage from './pages/LoadingPage';
import NotFound from './pages/NotFound';
import firebase from 'firebase/app';

export const App = () => {

    const [isLogin, setLogin] = useState(undefined);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {

                setLogin(true);
            }
            else {
                setLogin(false);
            }

        });
    }, [])


    const AuthRoute = (props: any) => {

        if (isLogin === undefined) {
            return <LoadingPage />
        }
        else if (isLogin === false) {
            return <Redirect to="/login" />
        }
        else {
            return <Route  {...props} />
        }

    }

    return (

        <Router>
            <Switch>

                <AuthRoute exact path='/'>
                    <Dashboard />
                </AuthRoute>
                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/signup">
                    <SignUpPage />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>



    );
};
