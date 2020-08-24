import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import {
    IconButton,
    InputBase,
    makeStyles,
    Paper,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import useFlaticonSearch from "../hooks/useFlaticonSearch";

const useStyles = makeStyles(theme => ({
    root: {
        margin: "5px",
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

function SearchDialog(props) {
    const { onClose, selectedValue, open } = props;
    const theme = useTheme();
    const fullscreen = useMediaQuery(theme.breakpoints.down("xs"));

    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);
    const { loading, icons, error } = useFlaticonSearch(query, limit, page);

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        onClose(value);
    };

    const handleSearch = query => {
        console.log("Submit:", query);
        setQuery(query);
        setPage(1);
        setLimit(25);
    };

    return (
        <Dialog onClose={handleClose} open={open} fullScreen={fullscreen}>
            <DialogTitle id="simple-dialog-title">
                Icon search {loading && "loading..."}
            </DialogTitle>
            <SearchForm handleSearch={handleSearch} />
            {error && <div>Error: {JSON.stringify(error)}</div>}
            <List>
                {icons.map(icon => (
                    <ListItem key={icon.id}>
                        <img
                            alt=""
                            src={icon.images.svg}
                            height="50"
                            width="50"
                        />
                    </ListItem>
                ))}
                <ListItem
                    autoFocus
                    button
                    onClick={() => handleListItemClick("addAccount")}
                >
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                </ListItem>
            </List>
        </Dialog>
    );
}

function SearchForm({ handleSearch }) {
    const classes = useStyles();
    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleSearch(value);
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            className={classes.root}
        >
            <InputBase
                onChange={handleChange}
                className={classes.input}
                placeholder="Search..."
            />
            <IconButton type="submit" className={classes.iconButton}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default function PictoAdder2({ onAdd }) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
        onAdd(value);
    };

    return (
        <div>
            <Typography variant="subtitle1">
                Selected: {selectedValue}
            </Typography>
            <br />
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Open search dialog
            </Button>
            <SearchDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
