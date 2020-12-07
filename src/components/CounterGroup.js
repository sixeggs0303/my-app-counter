import React, { Component } from 'react'
import Counter from './Counter.js'

export default class CounterGroup extends Component {


    render() {
        let counterGroupItems = [];
        for (var i = 0; i < 10; i++) {
            counterGroupItems.push(<Counter />)
        }
        return (
            <div>
                {counterGroupItems}
            </div>
        )
    }
}
