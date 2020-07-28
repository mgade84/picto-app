import React, { Component } from "react";
import PictogramControl from "./PictogramControl";

export default class Pictogram extends Component {
    render() {
        const { data, onDelete, onDown, onUp } = this.props;
        const { id, img, text } = data;
        return (
            <div className="Pictogram">
                <PictogramControl
                    onDelete={() => onDelete(id)}
                    onDown={() => onDown(id)}
                    onUp={() => onUp(id)}
                />
                <img className="PictoImage" src={img} alt="pictogram" />
                <p>{text}</p>
            </div>
        );
    }
}
