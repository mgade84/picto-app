import React from "react";
import PictogramControl from "./PictogramControl";
import {
    makeStyles,
    CardContent,
    Typography,
    CardMedia,
    Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 200,
        height: 220,
        margin: "10px",
        border: "2px solid",
        position: "relative",
    },
    control: {
        position: "absolute",
        border: "2px solid",
        left: "200px",
        top: "10px",
    },
});

export default function Pictogram(props) {
    const { data, onDelete, onDown, onUp } = props;
    const { id, img, text } = data;
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={5}>
            <CardContent>
                <CardMedia component="img" image={img} />
                <Typography align="center" noWrap={true}>
                    {text}
                </Typography>
                <PictogramControl
                    className={classes.control}
                    onDelete={() => onDelete(id)}
                    onDown={() => onDown(id)}
                    onUp={() => onUp(id)}
                />
            </CardContent>
        </Paper>
    );
}
