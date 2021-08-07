import React, {Component} from 'react';

class State1 extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount
        })
    }

    minHandler = () => {
        let currentCount = this.state.count;
        if (currentCount > 1) {
            currentCount--;
        }
        this.setState({
            count: currentCount
        })
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