import React from "react";
import PageNotFound from "./app/pages/404";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './app/styles/common.scss';
import './app/styles/reset.scss';
import Home from "./app/pages/Home";
import Movie from "./app/pages/Movie";
import EmptyPage from "./app/pages/Empty";

export const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <EmptyPage/>
                </Route>
                <Route path='/search'>
                    <Home />
                </Route>
                <Route path='/film/:id'>
                    <Movie/>
                </Route>
                <Route path='*'>
                    <PageNotFound/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;