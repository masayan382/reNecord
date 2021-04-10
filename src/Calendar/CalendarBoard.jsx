import React from 'react'
import { GridList } from "@material-ui/core";
import styles from "./Calendar.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const calendar = [
    "29",
    "30",
    "10月1日",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "11月1日",
    "2"
];

const createCalendar = () => {
    const firstDay = dayjs().startOf("month");
    const firstDayIndex = firstDay.day();
    return Array(35)
        .fill(0)
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            const day = firstDay.add(diffFromFirstDay, "day");
            return day;
        });
};

const CalendarBoard = () => {
    const calendar = createCalendar();
    console.log(calendar);
    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {calendar.map(c => (
                    <li key={c.toISOString()}>
                        <div className={styles.element}>{c.format("D")}</div>
                    </li>
                ))}
            </GridList>
        </div>
    );
}

export default CalendarBoard
