import React, { Component } from "react";
import Pictogram from "./Pictogram";

export default class PictoContainer extends Component {
    render() {
        return (
            <div>
                <Pictogram
                    image="https://image.flaticon.com/icons/svg/70/70950.svg"
                    title="Picto title"
                />
                <Pictogram image="" title="Picto title" />
                <Pictogram image="" title="Picto title" />
            </div>
        );
    }
}
