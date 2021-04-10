import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import CalendarElement from "./CalendarElement";
import { GridList, Typography } from "@material-ui/core";
import styles from "./Calendar.module.css";
import { createCalendar } from "../Dayjs/calendar";
import { signOut } from "../features/users/usersSlice"

const calendar = createCalendar();

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = () => {
    // const calendar = createCalendar();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.calendar)
    console.log('selector:', selector);
    console.log(calendar);
    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {days.map(d => (
                    <li key={d}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"
                        >
                            {d}
                        </Typography>
                    </li>
                ))}
                {calendar.map(c => (
                    <li key={c.toISOString()}>
                        <CalendarElement day={c} />
                    </li>
                ))}
            </GridList>
            <button onClick={() => dispatch(signOut())}>
                sign out
    </button>
        </div>
    );
}

export default CalendarBoard
