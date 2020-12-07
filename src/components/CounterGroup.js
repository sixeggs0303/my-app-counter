import React, { Component } from 'react'
import Counter from './Counter.js'

export default class CounterGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sum: 0
        }
    }

    initArraySize = (number) => {
        const size = number.length > 0 ? parseInt(number) : 0
        return Array.from(Array(size).keys())
    }

    countSum = (change) => {
        this.setState((prevState) => ({ sum: prevState.sum + change }))
        this.props.sum(this.state.sum + change)
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {initArraySize.map((value) => (
                    <Counter key={value} counterChange={this.countSum} />
                ))
                }
            </div>
        )
    }
}
