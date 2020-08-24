import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: "10px",
    },
    image: {
        margin: "5px",
    },
}));

export default function IconSelector({ icons, handleSelectIcon }) {
    const classes = useStyles();

    const handleClick = icon => () => {
        handleSelectIcon(icon);
    };

    return (
        <Grid
            className={classes.root}
            container
            direction="row"
            spacing={0}
            justify="flex-start"
            alignItems="flex-start"
        >
            {icons.map(icon => (
                <Paper className={classes.paper} key={icon.id}>
                    <Button onClick={handleClick(icon)}>
                        <img
                            className={classes.image}
                            alt=""
                            src={icon.images.svg}
                            height="50"
                            width="50"
                        />
                    </Button>
                </Paper>
            ))}
        </Grid>
    );
}
