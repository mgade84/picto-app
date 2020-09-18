import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin: "10px",
        border: "2px solid",
        padding: "20px",
    },
});

export default function PictogramBase({ children }) {
    const classes = useStyles();

    return (
        <Paper elevation={5} className={classes.root}>
            {children}
        </Paper>
    );
}
