import React, { Component } from "react";

export default class extends Component {
    render() {
        const { onAdd } = this.props;
        return (
            <div>
                <button onClick={onAdd} className="btn btn-success btn-sm m-1">
                    Add
                </button>
            </div>
        );
    }
}
