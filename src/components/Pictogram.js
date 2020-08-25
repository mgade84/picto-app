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
        height: 250,
        border: "2px solid",
    },
});

export default function Pictogram(props) {
    const { data, onDelete, onDown, onUp } = props;
    const { id, img, text } = data;
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={5}>
            <CardContent>
                {/* <img className="PictoImage" src={img} alt="pictogram" /> */}
                <CardMedia component="img" image={img} />
                <Typography align="center" noWrap="true">
                    {text}
                </Typography>
                <PictogramControl
                    onDelete={() => onDelete(id)}
                    onDown={() => onDown(id)}
                    onUp={() => onUp(id)}
                />
            </CardContent>
        </Paper>
    );
}
