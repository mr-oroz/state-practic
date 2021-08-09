import React, {Component} from 'react';

class State1 extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    handler = () => {
        this.setState(state =>  ({
            count: ++state.count
        }))
    }

    minHandler = () => {
        this.setState(state => ({
            count: state.count > 1 ? --state.count : state.count
        }))
    }
    render() {
        return (
            <div>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>+</button>
                </div>
                <div>{this.state.count}</div>
                <div>
                    <button onClick={this.minHandler}>-</button>
                </div>
            </div>
        );
    }
}

export default State1;