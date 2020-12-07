import React, { Component } from 'react'
import CounterGroup from './CounterGroup'

export default class MultiCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0,
        };
    };

    onChange = (event) => {
        this.setState({ size: event.target.value });
    };

    render() {
        return (
            <div>
                <input type="number" value={this.state.size} onChange={this.onChange} />
                <CounterGroup size={this.state.size} />
            </div>
        );
    };
}
