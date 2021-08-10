import React, {Component} from 'react';
import './app-header.css'
class Header extends Component {
    render() {
        const {liked, allPost} = this.props
        return (
            <div className={'app-header d-flex'}>
                <h1>Oroz Zhumabekov</h1>
                <h2>{allPost} записейб из них понравилось {liked}</h2>
            </div>
        );
    }
}

export default Header;