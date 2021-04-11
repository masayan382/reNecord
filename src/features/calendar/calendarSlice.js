import { createSlice } from "@reduxjs/toolkit";
// import { auth, db, FirebaseTimestamp } from "../../firebase/index";
// import { push } from "connected-react-router";
import { formatMonth } from "../../Dayjs/calendar";
import dayjs from "dayjs";
const day = dayjs();
const init = formatMonth(day);

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: init,
    // initialState: {
    //     year: day.year(),
    //     month: day.month() + 1,
    // },
    reducers: {
        calendarSetMonth: (payload) => {
            return {
                payload,
            };
        },
    },
});

export const { calendarSetMonth } = calendarSlice.actions;

export default calendarSlice.reducer;
