import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Pictogram from "./Pictogram";
import { FormControlLabel, Grid, Switch } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import useLocalStorage from "../hooks/useLocalStorage";
import PictoAdder from "./PictoAdder";

export default function PictoContainer(props) {
    const [state, setState] = useLocalStorage("pictograms", {
        pictograms: [],
    });
    const [editEnabled, setEditEnabled] = useState(false);

    const handleDelete = id => {
        const pictograms = state.pictograms.filter(p => p.id !== id);
        setState({ pictograms });
    };

    const handleSave = (id, img, text) => {
        const pictograms = state.pictograms;
        const index = pictograms.findIndex(e => e.id === id);
        if (index >= 0) {
            pictograms[index] = { id, img, text };
            setState({ pictograms });
            return true;
        } else {
            return false;
        }
    };

    const handleUp = id => {
        let pictograms = state.pictograms;
        const i = pictograms.findIndex(p => p.id === id);
        if (i > 0) {
            const swap = getSwapper(pictograms);
            pictograms = swap(i, i - 1);
            setState({ pictograms });
        }
    };

    const handleDown = id => {
        let pictograms = state.pictograms;
        const i = pictograms.findIndex(p => p.id === id);
        if (i < pictograms.length - 1) {
            const swap = getSwapper(pictograms);
            pictograms = swap(i, i + 1);
            setState({ pictograms });
        }
    };

    const getSwapper = ([...arr]) => (x, y) =>
        arr.length > 1 ? (([arr[x], arr[y]] = [arr[y], arr[x]]), arr) : arr;

    const handleFlaticonAdd = icon => {
        if (icon) {
            const newPic = {
                id: uuid(),
                img: icon.images.svg,
                text: icon.description,
            };
            const pictograms = [...state.pictograms, newPic];
            setState({ pictograms });
        }
    };

    const toggleEdit = () => {
        setEditEnabled(!editEnabled);
    };

    const { pictograms } = state;
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
        >
            {pictograms.map(p => (
                <Grid item key={p.id}>
                    <Pictogram
                        data={p}
                        onDelete={handleDelete}
                        onSave={handleSave}
                        onDown={handleDown}
                        onUp={handleUp}
                        editEnabled={editEnabled}
                    ></Pictogram>
                </Grid>
            ))}
            <FormControlLabel
                control={<Switch checked={editEnabled} onChange={toggleEdit} />}
                labelPlacement="top"
                label={<EditIcon />}
                style={{
                    margin: 0,
                    position: "fixed",
                    top: "auto",
                    left: "auto",
                    bottom: "80px",
                    right: "10px",
                }}
            />
            <PictoAdder onAdd={handleFlaticonAdd} />
        </Grid>
    );
}
