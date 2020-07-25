import React, { Component } from "react";
import PictogramControl from "./PictogramControl";

export default class Pictogram extends Component {
    render() {
        const { image, title } = this.props;
        return (
            <div className="Pictogram">
                <PictogramControl />
                <img className="PictoImage" src={image} alt="pictogram" />
                <h2>{title}</h2>
            </div>
        );
    }
}
