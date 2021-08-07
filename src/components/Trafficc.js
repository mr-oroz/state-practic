import React, {Component} from 'react';

class Trafficc extends Component {
    constructor() {
        super();
        this.state = {
            second: 10
        }
    }



    render() {
        return (
            <div className={'block'}>
                <div className={'red'}></div>
                <div className={'yellow'}>
                    <span></span>
                </div>
                <div className={'green'}></div>
            </div>
        );
    }
}

export default Trafficc;