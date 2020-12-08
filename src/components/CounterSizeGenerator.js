import React, { Component } from 'react'

export default class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0,
        }
    }

    onChange = (event) => {
        this.setState({ size: event.target.value })
        this.props.onSizeChange(event.target.value)
    }

    render() {
        return (
            <div>
                <label>Size : </label>
                <input type="number" value={this.state.size} onChange={this.onChange} />
            </div>
        )
    }
}
