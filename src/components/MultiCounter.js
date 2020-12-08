import React, { Component } from 'react'
import CounterGroupContainer from '../containers/CounterGroupContainer'
import CounterGroupSumContrainer from '../containers/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';

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

    render() {
        return (
            <div>
                <CounterSizeGeneratorContainer />
                <CounterGroupSumContrainer />
                <CounterGroupContainer />
            </div>
        )
    }
}
