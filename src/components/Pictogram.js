import React, { Component } from "react";
import PictogramControl from "./PictogramControl";

export default class Pictogram extends Component {
    render() {
        const { id, img, text } = this.props.data;
        return (
            <div className="Pictogram">
                <PictogramControl onDelete={() => this.props.onDelete(id)} />
                <img className="PictoImage" src={img} alt="pictogram" />
                <h2>{text}</h2>
            </div>
        );
    }
}
