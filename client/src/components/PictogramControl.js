import React, { Component } from "react";
import { IconButton, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import UpIcon from "@material-ui/icons/ArrowUpward";
import DownIcon from "@material-ui/icons/ArrowDownward";
import EditIcon from "@material-ui/icons/Edit";

export default class PictogramControl extends Component {
    render() {
        const { onUp, onDown, onDelete, className } = this.props;
        return (
            <Paper className={className} elevation={2}>
                <IconButton onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={onUp}>
                    <UpIcon />
                </IconButton>
                <IconButton onClick={onDown}>
                    <DownIcon />
                </IconButton>
            </Paper>
        );
    }
}
