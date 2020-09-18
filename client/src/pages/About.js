import React from "react";
import { makeStyles } from "@material-ui/core";
import PictogramBase from "../components/PictogramBase";

const useStyles = makeStyles({
    version: {
        color: "darkgray",
    },
});

export default function About() {
    const classes = useStyles();

    return (
        <PictogramBase>
            <h1>About Picto</h1>
            <p>
                Picto is a small web app for quickly making small sequences of
                pictograms for visual guidance.
            </p>
            <p>
                Intended for children (or adult) with (or without) special
                needs.
            </p>
            <hr />
            <p>Created by Mikkel Gade</p>
            <p className={classes.version}>
                Version {process.env.REACT_APP_VERSION}
            </p>
        </PictogramBase>
    );
}
