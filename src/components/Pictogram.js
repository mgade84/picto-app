import React from "react";
import PictogramControl from "./PictogramControl";
import {
    Card,
    makeStyles,
    CardContent,
    Typography,
    CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 200,
        height: 280,
        border: "3px solid",
    },
});

export default function Pictogram(props) {
    const { data, onDelete, onDown, onUp } = props;
    const { id, img, text } = data;
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {/* <img className="PictoImage" src={img} alt="pictogram" /> */}
                <CardMedia component="img" image={img} />
                <Typography variant="h5" component="h1">
                    {text}
                </Typography>
            </CardContent>

            <div className="Pictogram">
                <PictogramControl
                    onDelete={() => onDelete(id)}
                    onDown={() => onDown(id)}
                    onUp={() => onUp(id)}
                />
            </div>
        </Card>
    );
}
