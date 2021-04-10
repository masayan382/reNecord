import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { SignUp, SignIn, Reset, Test } from "./templates";
import { CalendarBoard } from "./Calendar/index";
import Auth from './Auth';

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/signin/reset"} component={Reset} />
            <Route exact path={"/test"} component={Test} />

            <Auth>
                <Route exact path={"(/)?"} component={CalendarBoard} />
            </Auth>
        </Switch>
    )
}

export default Router;
