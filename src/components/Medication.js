import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";

export class Medication extends Component {
render() {
    return (
    <>
    <h1>Meidcal</h1>
    <p>Medicine: {this.props.medicine}</p>
    <p>Dose: {this.props.dose}</p>
    </>
    );
}
}
export default Medication;