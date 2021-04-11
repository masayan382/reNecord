import React from 'react';
import {
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Input,
    Grid
} from "@material-ui/core";
import { LocationOnOutlined, NotesOutlined } from "@material-ui/icons";
import InstagramIcon from '@material-ui/icons/Instagram';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { withStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { addScheduleClose } from "../../src/features/addSchedule/addScheduleSlice"

const spacer = { margin: "4px 0" };

const AddSchedule = () => {
    const isDialogOpen = useSelector(state => state.addSchedule.isDialogOpen);
    const dispatch = useDispatch();
    const closeDialog = () => {
        dispatch(addScheduleClose());
    }
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogContent>
                <h2>記録</h2>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <InstagramIcon />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField style={spacer} fullWidth placeholder="写真を追加" />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <InsertEmoticonIcon />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField style={spacer} fullWidth placeholder="元気度を追加" />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <LocalDrinkIcon />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField style={spacer} fullWidth placeholder="水分摂取量を追加" />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <LocalDiningIcon />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField style={spacer} fullWidth placeholder="食事摂取量を追加" />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <DirectionsRunIcon />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField style={spacer} fullWidth placeholder="排泄量を追加" />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined">
                    保存
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddSchedule;
