import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
    SwipeableDrawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CollectionsIcon from "@material-ui/icons/Collections";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import { useDrawer, useDrawerUpdate } from "../context/DrawerContext";
import { AppName } from "../App";
import { Link } from "react-router-dom";
import { Pages } from "../SiteMap";
import { ReactComponent as Logo } from "../logo.svg";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    appLogo: {
        width: 50,
        height: 50,
    },
});

export default function Drawer() {
    const classes = useStyles();
    const isOpen = useDrawer();
    const setOpen = useDrawerUpdate();

    const toggleDrawer = open => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpen(open);
    };

    const createMenuItem = (icon, text, linkPath) => (
        <Link to={linkPath}>
            <ListItem key={text} button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </Link>
    );

    const list = () => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: false,
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Logo className={classes.appLogo}></Logo>
                    </ListItemIcon>
                    <Typography variant="h5">{AppName}</Typography>
                </ListItem>
                <Divider />
                {createMenuItem(
                    <CollectionsIcon />,
                    "My Picto collection",
                    Pages.home
                )}
                {createMenuItem(<AddBoxIcon />, "New Picto", Pages.newPicto)}
            </List>
            <Divider />
            <List>
                {createMenuItem(<SettingsIcon />, "Settings", Pages.settings)}
                {createMenuItem(<InfoIcon />, "About", Pages.about)}
            </List>
        </div>
    );

    return (
        <>
            <SwipeableDrawer
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </>
    );
}
