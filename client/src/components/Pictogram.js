import React, { useState } from "react";
import {
    makeStyles,
    CardContent,
    Typography,
    CardMedia,
    Paper,
    IconButton,
    Dialog,
    TextField,
    Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import UpIcon from "@material-ui/icons/ArrowUpward";
import DownIcon from "@material-ui/icons/ArrowDownward";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
    root: {
        width: 200,
        height: 220,
        margin: "10px",
        border: "2px solid",
        position: "relative",
    },
    imageClass: {
        height: "168px", // Hardcoded. Should be same as width...
    },
    control: {
        position: "absolute",
        border: "2px solid",
        left: "200px",
        top: "10px",
    },
    edit: {
        margin: "10px",
    },
});

export default function Pictogram(props) {
    const { data, onDelete, onSave, onDown, onUp } = props;
    const { id, img, text } = data;
    const classes = useStyles();
    const [editOpen, setEditOpen] = useState(false);
    const [editImgUrl, setEditImgUrl] = useState(img);
    const [editText, setEditText] = useState(text);
    const [saveError, setSaveError] = useState(false);

    function handleEdit() {
        setSaveError(false);
        setEditImgUrl(img);
        setEditText(text);
        setEditOpen(true);
    }

    function handleSave() {
        const success = onSave(id, editImgUrl, editText);
        setSaveError(!success);

        if (success) {
            setEditOpen(false);
        }
    }

    function handleKeyPress(e) {
        if (e.charCode === 13) {
            // Enter
            e.preventDefault();
            handleSave();
        }
    }

    return (
        <>
            <PictoContent
                className={classes.root}
                imageClassName={classes.imageClass}
                text={text}
                img={img}
                elevation={5}
            >
                <Paper className={classes.control} elevation={2}>
                    <IconButton onClick={() => onDelete(id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={handleEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onUp(id)}>
                        <UpIcon />
                    </IconButton>
                    <IconButton onClick={() => onDown(id)}>
                        <DownIcon />
                    </IconButton>
                </Paper>
            </PictoContent>
            <Dialog
                onClose={() => setEditOpen(false)}
                open={editOpen}
                fullScreen={false}
            >
                <PictoContent
                    className={classes.root}
                    imageClassName={classes.imageClass}
                    text={editText}
                    img={editImgUrl}
                    elevation={5}
                ></PictoContent>
                <TextField
                    className={classes.edit}
                    id="outlined-basic"
                    label="Image URL"
                    variant="outlined"
                    multiline
                    defaultValue={img}
                    onChange={e => setEditImgUrl(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <TextField
                    className={classes.edit}
                    id="outlined-basic"
                    label="Text"
                    variant="outlined"
                    defaultValue={text}
                    onChange={e => setEditText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button
                    className={classes.edit}
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    Save
                </Button>
                {saveError && <div>Error saving picto!</div>}
            </Dialog>
        </>
    );
}

function PictoContent({ img, text, className, imageClassName, children }) {
    return (
        <Paper className={className} elevation={5}>
            <CardContent>
                <CardMedia
                    className={imageClassName}
                    component="img"
                    image={img}
                />
                <Typography align="center" noWrap={true}>
                    {text}
                </Typography>
                {children}
            </CardContent>
        </Paper>
    );
}
