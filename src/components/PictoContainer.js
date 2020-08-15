import React, { useState } from "react";
import Pictogram from "./Pictogram";
import PictoAdder from "./PictoAdder";
import { v4 as uuid } from "uuid";
import { Grid } from "@material-ui/core";
import { PictoData } from "../data/data";

export default function PictoContainer(props) {
    const [state, setState] = useState({
        pictograms: PictoData,
    });

    const handleDelete = id => {
        const pictograms = state.pictograms.filter(p => p.id !== id);
        setState({ pictograms });
    };

    const handleUp = id => {
        console.log("Up", id);
        let pictograms = state.pictograms;
        const i = pictograms.findIndex(p => p.id === id);
        if (i > 0) {
            const swap = getSwapper(pictograms);
            pictograms = swap(i, i - 1);
            setState({ pictograms });
        }
    };

    const handleDown = id => {
        console.log("Down", id);
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

    const handleAdd = () => {
        const newPic = {
            id: uuid(),
            img: "https://image.flaticon.com/icons/svg/2912/2912288.svg",
            text: "Take picture",
        };
        const pictograms = [...state.pictograms, newPic];
        setState({ pictograms });
    };

    const { pictograms } = state;
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={2}
        >
            {pictograms.map(p => (
                <Grid item key={p.id}>
                    <Pictogram
                        data={p}
                        onDelete={handleDelete}
                        onDown={handleDown}
                        onUp={handleUp}
                    ></Pictogram>
                </Grid>
            ))}
            <PictoAdder onAdd={handleAdd}></PictoAdder>
        </Grid>
    );
}
