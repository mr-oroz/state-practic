import React, {Component} from 'react';
import './search-panel.css'
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdataSearch = (e) => {
        console.log(e.target.value)
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdataSearch(term)
    }
    render() {
        return (
            <input
                className={'form-control search-input'}
                type='text'
                placeholder='Поиск по записи'
                onChange={this.onUpdataSearch}
            />
        );
    }
}

export default SearchPanel;