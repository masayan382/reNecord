import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import usersReducer from "../features/users/usersSlice";
import calendarReducer from "../features/calendar/calendarSlice";
import addScheduleReducer from "../features/addSchedule/addScheduleSlice";

export const history = createBrowserHistory();

const reducer = combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
});

export const store = configureStore({
    reducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(routerMiddleware(history));
    },
});
