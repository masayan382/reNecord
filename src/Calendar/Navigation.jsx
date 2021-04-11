import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import {
    getNextMonth,
    getPreviousMonth,
    getMonth,
    formatMonth
} from "../../src/Dayjs/calendar";
import { calendarSetMonth } from "../features/calendar/calendarSlice";
import { DatePicker } from "@material-ui/pickers";

const StyledToolbar = withStyles({
    root: { padding: "0" }
})(Toolbar);

const StyledTypography = withStyles({
    root: { margin: "0 30px 0 10px" }
})(Typography);

const StyledDatePicker = withStyles({
    root: { marginLeft: 30 }
})(DatePicker);

const Navigation = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const dispatch = useDispatch();
    const data = useSelector(state => state.calendar);
    console.log('data:', data);
    const month = getMonth(data);

    const setMonth = (month) => {
        dispatch(calendarSetMonth(month));
    };
    const setNextMonth = () => {
        const nextMonth = getNextMonth(month);
        dispatch(nextMonth);
    };
    const setPreviousMonth = () => {
        const previousMonth = getPreviousMonth(data);
        dispatch(previousMonth);
    };

    return (
        <StyledToolbar>
            <IconButton>
                <DehazeIcon />
            </IconButton>
            <img src="/images/calendar_icon.png" width="40" height="40" />
            <StyledTypography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </StyledTypography>
            <IconButton size="small">
                <ArrowBackIos />
            </IconButton>
            <IconButton size="small">
                <ArrowForwardIos />
            </IconButton>
            <StyledDatePicker
                value={month}
                onChange={handleDateChange}
                variant="inline"
                format="YYYY年 M月"
                animateYearScrolling
                disableToolbar
            />
        </StyledToolbar>
    );
};

export default Navigation
