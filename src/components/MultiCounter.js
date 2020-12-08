import React, { Component } from 'react'
import CounterGroup from './CounterGroup'
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';

export default class MultiCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: 0,
            sum: 0,
        }
    }

    handleSizeChange = (sizeInput) => {
        this.setState({ size: sizeInput })
        this.setState({ sum: 0 })

        // Reference approach
        // this.counterGroup.reset()
    }

    calSum = (change) => {
        this.setState((prevState) => ({ sum: prevState.sum + change }))
    }

    render() {
        return (
            <div>
                <CounterSizeGenerator onSizeChange={this.handleSizeChange} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup onRef={ref => (this.counterGroup = ref)} size={this.state.size} counterChange={this.calSum} />
            </div>
        )
    }
}
