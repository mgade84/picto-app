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
    const { data, onDelete, onDown, onUp } = props;
    const { id, img, text } = data;
    const classes = useStyles();
    const [editOpen, setEditOpen] = useState(false);
    const [editImgUrl, setEditImgUrl] = useState(img);
    const [editText, setEditText] = useState(text);

    function handleSave(params) {
        setEditOpen(false);
        console.log("Save", editText, editImgUrl);
    }

    return (
        <>
            <PictoContent
                className={classes.root}
                text={text}
                img={img}
                elevation={5}
            >
                <Paper className={classes.control} elevation={2}>
                    <IconButton onClick={() => onDelete(id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => setEditOpen(true)}>
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
                    text={text}
                    img={img}
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
                />
                <TextField
                    className={classes.edit}
                    id="outlined-basic"
                    label="Text"
                    variant="outlined"
                    defaultValue={text}
                    onChange={e => setEditText(e.target.value)}
                />
                <Button
                    className={classes.edit}
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    Save
                </Button>
            </Dialog>
        </>
    );
}

function PictoContent({ img, text, className, children }) {
    return (
        <Paper className={className} elevation={5}>
            <CardContent>
                <CardMedia component="img" image={img} />
                <Typography align="center" noWrap={true}>
                    {text}
                </Typography>
                {children}
            </CardContent>
        </Paper>
    );
}
