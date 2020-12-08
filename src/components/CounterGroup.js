import React, { Component } from 'react'
import CounterContainer from "../containers/CounterContainer"

export default class CounterGroup extends Component {
    constructor(props) {
        super(props)
        this.counters = []
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    initArraySize = (number) => {
        const size = number.length > 0 ? parseInt(number) : 0
        return Array.from(Array(size).keys())
    }

    countSum = (change) => {
        this.props.counterChange(change)
    }

    reset = () => {
        for (var i = 0; i < this.props.size; i++) {
            this.counters[i].reset()
        }
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {initArraySize.map((value) => (
                    <CounterContainer size={size} onRef={ref => (this.counters[value] = ref)} key={value} counterChange={this.countSum} />
                ))
                }
            </div>
        )
    }
}
