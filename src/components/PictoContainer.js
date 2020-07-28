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

    render() {
        const { pictograms } = this.state;
        return (
            <div>
                {pictograms.map((p) => (
                    <Pictogram
                        key={p.id}
                        data={p}
                        onDelete={this.handleDelete}
                    ></Pictogram>
                ))}
            </div>
        );
    }
}
