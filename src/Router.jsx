import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Login, Home, SignUp, SignIn } from "./templates";

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"(/)"} component={Home} />
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/signin"} component={SignIn} />
        </Switch>
    )
}

export default Router;
