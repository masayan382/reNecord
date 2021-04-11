import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { SignUp, SignIn, Reset, Test } from "./templates";
import { CalendarBoard } from "./Calendar/index";
import Auth from './Auth';
import Navigation from "../src/Calendar/Navigation"
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AddScheduleDialog from "../src/Calendar/AddSchedule"

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/signin/reset"} component={Reset} />
            <Route exact path={"/test"} component={Test} />

            <Auth>
                <MuiPickersUtilsProvider utils={DayjsUtils}>
                    <Navigation />
                    <Route exact path={"(/)?"} component={CalendarBoard} />
                    <AddScheduleDialog />
                </MuiPickersUtilsProvider>
            </Auth>
        </Switch>
    )
}

export default Router;
