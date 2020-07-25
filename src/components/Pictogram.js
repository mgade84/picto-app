import React, { Component } from "react";

export default class Pictogram extends Component {
    render() {
        const { image, title } = this.props;
        return (
            <div>
                <img className="Pictogram" src={image} alt="pictogram" />
                <h2>{title}</h2>
            </div>
        );
    }
}
