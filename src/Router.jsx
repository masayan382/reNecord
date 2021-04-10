import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Home, SignUp, SignIn, Reset, Test } from "./templates";
import Auth from './Auth';

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/signin/reset"} component={Reset} />
            <Route exact path={"/test"} component={Test} />

            <Auth>
                <Route exact path={"(/)?"} component={Home} />
            </Auth>
        </Switch>
    )
}

export default Router;
