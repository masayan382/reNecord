import React from 'react'
import CalendarElement from "./CalendarElement";
import { GridList } from "@material-ui/core";
import styles from "./Calendar.module.css";
import { createCalendar } from "../Dayjs/calendar";

const calendar = createCalendar();

const CalendarBoard = () => {
    const calendar = createCalendar();
    console.log(calendar);
    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {calendar.map(c => (
                    <li key={c.toISOString()}>
                        <CalendarElement>{c.format("D")}</CalendarElement>
                    </li>
                ))}
            </GridList>
        </div>
    );
}

export default CalendarBoard
