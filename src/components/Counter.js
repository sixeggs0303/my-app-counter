import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }
    }

    // Props update approach
    shouldComponentUpdate = (nextProps) => {
        if (nextProps.size !== this.props.size) {
            this.setState({number: 0})
        }
        return true
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    onIncrease = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }))
        this.props.counterChange(1)
    }

    onDecrease = () => {
        this.setState((prevState) => ({ number: prevState.number - 1 }))
        this.props.counterChange(-1)
    }

    reset = () => {
        this.setState({ number: 0 })
    }

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.onIncrease} />
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick={this.onDecrease} />
            </section>
        )
    }
}
