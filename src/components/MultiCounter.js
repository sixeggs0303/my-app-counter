import React, { Component } from 'react'
import CounterGroup from './CounterGroup'
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';

export default class MultiCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0,
            sum: 0,
        }
    }

    handleSizeCallback = (sizeInput) => {
        this.setState({ size: sizeInput })
    }

    setSum = (sum) => {
        this.setState({ sum: sum })
    }

    render() {
        return (
            <div>
                <CounterSizeGenerator sizeCallback={this.handleSizeCallback} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={this.state.size} sum={this.setSum} />
            </div>
        )
    }
}
