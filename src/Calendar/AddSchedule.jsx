import React from 'react';
import { Dialog, DialogContent } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addScheduleClose } from "../../src/features/addSchedule/addScheduleSlice"

const AddSchedule = () => {
    const isDialogOpen = useSelector(state => state.addSchedule.isDialogOpen);
    const dispatch = useDispatch();
    const closeDialog = () => {
        dispatch(addScheduleClose());
    }
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogContent>dialog</DialogContent>
        </Dialog>
    )
}

export default AddSchedule;
