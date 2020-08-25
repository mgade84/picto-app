import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import UpIcon from "@material-ui/icons/ArrowUpward";
import DownIcon from "@material-ui/icons/ArrowDownward";

export default class PictogramControl extends Component {
    render() {
        const { onUp, onDown, onDelete } = this.props;
        return (
            <div className="PictoControl">
                <IconButton onClick={onUp}>
                    <UpIcon />
                </IconButton>
                <IconButton onClick={onDown}>
                    <DownIcon />
                </IconButton>
                <IconButton onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
            </div>
        );
    }
}
