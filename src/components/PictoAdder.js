import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import {
    Fab,
    IconButton,
    InputBase,
    makeStyles,
    Paper,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import useFlaticonSearch from "../hooks/useFlaticonSearch";
import IconSelector from "./IconSelector";

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
    const { onClose, open } = props;
    const theme = useTheme();
    const fullscreen = useMediaQuery(theme.breakpoints.down("xs"));

    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);
    const { loading, icons, error } = useFlaticonSearch(query, limit, page);

    const handleClose = () => {
        onClose();
    };

    const handleAddIcon = icon => {
        onClose(icon);
    };

    const handleSearch = query => {
        console.log("Submit:", query);
        setQuery(query);
        setPage(1);
        setLimit(25);
    };

    function renderSearchResults() {
        if (error) return <div>Error: {JSON.stringify(error, null, 2)}</div>;
        if (icons.length === 0) return <div>No icons found :-(</div>;
        return <IconSelector icons={icons} handleSelectIcon={handleAddIcon} />;
    }

    return (
        <Dialog onClose={handleClose} open={open} fullScreen={fullscreen}>
            <DialogTitle id="simple-dialog-title">
                Icon search {loading && "loading..."}
            </DialogTitle>
            <SearchForm handleSearch={handleSearch} />
            {renderSearchResults()}
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

export default function PictoAdder({ onAdd }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = selectedIcon => {
        setOpen(false);
        onAdd(selectedIcon);
    };

    return (
        <div>
            <Fab color="primary" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <SearchDialog open={open} onClose={handleClose} />
        </div>
    );
}
