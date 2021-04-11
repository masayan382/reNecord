import { createSlice } from "@reduxjs/toolkit";

export const addScheduleSlice = createSlice({
    name: "addSchedule",
    initialState: {
        form: {
            title: "",
            description: "",
            date: null,
            location: "",
        },
        isDialogOpen: false,
    },
    reducers: {
        addScheduleSet: (state, action) => {
            return {
                ...state,
                form: { ...state.form, ...action.payload },
            };
        },
        addScheduleOpen: (state) => {
            return {
                ...state,
                isDialogOpen: true,
            };
        },
        addScheduleClose: () => {
            const initialState = {
                form: {
                    title: "",
                    description: "",
                    date: null,
                    location: "",
                },
                isDialogOpen: false,
            };
            return initialState;
        },
    },
});

export const { addScheduleSet, addScheduleOpen, addScheduleClose } = addScheduleSlice.actions;

export default addScheduleSlice.reducer;
