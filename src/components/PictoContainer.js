import React, { Component } from "react";
import Pictogram from "./Pictogram";

export default class PictoContainer extends Component {
    state = {
        pictograms: [
            {
                id: 1,
                img: "https://image.flaticon.com/icons/svg/70/70950.svg",
                text: "Test text",
            },
            {
                id: 2,
                img: "https://image.flaticon.com/icons/svg/70/70950.svg",
                text: "Test text",
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
