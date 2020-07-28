import React, { Component } from "react";
import Pictogram from "./Pictogram";

export default class PictoContainer extends Component {
    state = {
        pictograms: [
            {
                id: 1,
                img: "https://image.flaticon.com/icons/svg/70/70950.svg",
                text: "This is a house",
            },
            {
                id: 2,
                img: "https://image.flaticon.com/icons/svg/70/70655.svg",
                text: "Clicky hand",
            },
            {
                id: 3,
                img: "https://image.flaticon.com/icons/svg/84/84101.svg",
                text: "Take picture",
            },
        ],
    };

    handleDelete = (id) => {
        const pictograms = this.state.pictograms.filter((p) => p.id !== id);
        this.setState({ pictograms });
    };

    handleUp = (id) => {
        console.log("Up", id);
        let pictograms = this.state.pictograms;
        const i = pictograms.findIndex((p) => p.id === id);
        if (i > 0) {
            const swap = this.getSwapper(pictograms);
            pictograms = swap(i, i - 1);
            this.setState({ pictograms });
        }
    };

    handleDown = (id) => {
        console.log("Down", id);
        let pictograms = this.state.pictograms;
        const i = pictograms.findIndex((p) => p.id === id);
        if (i < pictograms.length - 1) {
            const swap = this.getSwapper(pictograms);
            pictograms = swap(i, i + 1);
            this.setState({ pictograms });
        }
    };

    getSwapper = ([...arr]) => (x, y) =>
        arr.length > 1 ? (([arr[x], arr[y]] = [arr[y], arr[x]]), arr) : arr;

    render() {
        const { pictograms } = this.state;
        return (
            <div>
                {pictograms.map((p) => (
                    <Pictogram
                        key={p.id}
                        data={p}
                        onDelete={this.handleDelete}
                        onDown={this.handleDown}
                        onUp={this.handleUp}
                    ></Pictogram>
                ))}
            </div>
        );
    }
}
