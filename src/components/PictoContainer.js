import React, { Component } from "react";
import Pictogram from "./Pictogram";
import PictoAdder from "./PictoAdder";
import { v4 as uuid } from "uuid";
import { Grid } from "@material-ui/core";
import { PictoData } from "../data/data";

export default class PictoContainer extends Component {
    state = {
        pictograms: PictoData,
    };

    handleDelete = id => {
        const pictograms = this.state.pictograms.filter(p => p.id !== id);
        this.setState({ pictograms });
    };

    handleUp = id => {
        console.log("Up", id);
        let pictograms = this.state.pictograms;
        const i = pictograms.findIndex(p => p.id === id);
        if (i > 0) {
            const swap = this.getSwapper(pictograms);
            pictograms = swap(i, i - 1);
            this.setState({ pictograms });
        }
    };

    handleDown = id => {
        console.log("Down", id);
        let pictograms = this.state.pictograms;
        const i = pictograms.findIndex(p => p.id === id);
        if (i < pictograms.length - 1) {
            const swap = this.getSwapper(pictograms);
            pictograms = swap(i, i + 1);
            this.setState({ pictograms });
        }
    };

    getSwapper = ([...arr]) => (x, y) =>
        arr.length > 1 ? (([arr[x], arr[y]] = [arr[y], arr[x]]), arr) : arr;

    handleAdd = () => {
        const newPic = {
            id: uuid(),
            img: "https://image.flaticon.com/icons/svg/2912/2912288.svg",
            text: "Take picture",
        };
        const pictograms = [...this.state.pictograms, newPic];
        this.setState({ pictograms });
    };

    render() {
        const { pictograms } = this.state;
        return (
            <div>
                {pictograms.map(p => (
                    <Pictogram
                        key={p.id}
                        data={p}
                        onDelete={this.handleDelete}
                        onDown={this.handleDown}
                        onUp={this.handleUp}
                    ></Pictogram>
                ))}
                <PictoAdder onAdd={this.handleAdd}></PictoAdder>
            </div>
        );
    }
}
