import React, { Component } from "react";

export default class PictogramControl extends Component {
    render() {
        return (
            <div className="PictoControl">
                <button className="btn btn-primary ControlBtn">Up</button>
                <button className="btn btn-primary ControlBtn">Down</button>
                <button className="btn btn-danger ControlBtn">Delete</button>
            </div>
        );
    }
}
