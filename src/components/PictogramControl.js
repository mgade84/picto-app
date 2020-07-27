import React, { Component } from "react";

export default class PictogramControl extends Component {
    render() {
        const { onUp, onDown, onDelete } = this.props;
        return (
            <div className="PictoControl">
                <button onClick={onUp} className="btn btn-primary btn-sm m-1">
                    Up
                </button>
                <button onClick={onDown} className="btn btn-primary btn-sm m-1">
                    Down
                </button>
                <button
                    onClick={onDelete}
                    className="btn btn-danger btn-sm m-1"
                >
                    Delete
                </button>
            </div>
        );
    }
}
