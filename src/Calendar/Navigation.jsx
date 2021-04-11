import React from 'react';
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import logo from "../../src/img/cal.png"

const StyledToolbar = withStyles({
    root: { padding: "0 0 0 50px" }
})(Toolbar);

const Navigation = () => {
    return (
        <StyledToolbar>
            <Toolbar>
                <img src={logo} width="40" height="40" alt="" />
                <Typography color="textSecondary" variant="h5" component="h1">
                    カレンダー
            </Typography>
                <IconButton size="small">
                    <ArrowBackIos />
                </IconButton>
                <IconButton size="small">
                    <ArrowForwardIos />
                </IconButton>
            </Toolbar>
        </StyledToolbar>
    );
};

export default Navigation
