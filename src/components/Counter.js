import React from "react";import { Component } from "react";


export class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }
    render() {
        return(
            <>
            <h1>Cpounter value is: { this.state.counter }</h1>
            <button>Clicked</button>
            </>
        );
    }
}
export default Counter;