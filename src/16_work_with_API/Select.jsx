import React, { Component } from "react";

export default class Select extends Component {
    render() {
        return (
            <select>
                {this.props.options.map((item, index) => <option value={item.value} key={index}>{item.label}</option>)}
            </select>
        )
    }
}