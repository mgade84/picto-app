import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useDrawerUpdate } from "../context/DrawerContext";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TopBar() {
    const classes = useStyles();
    const setOpenDrawer = useDrawerUpdate();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={() => {
                        console.log("Menu click");
                        setOpenDrawer(true);
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Picto App
                </Typography>
                <Button color="inherit">TODO</Button>
            </Toolbar>
        </AppBar>
    );
}
