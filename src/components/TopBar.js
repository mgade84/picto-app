import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { AppName } from "../App";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@material-ui/core";
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
                    {AppName}
                </Typography>
                <Button color="inherit">TODO</Button>
            </Toolbar>
        </AppBar>
    );
}
