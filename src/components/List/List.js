import React, {Component} from 'react';
import './List.css'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
        this.inImportant = this.inImportant.bind(this)
        this.inLike = this.inLike.bind(this)
    }

    inImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    inLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label, onDelete} = this.props;
        const {important, like} = this.state
        let zvezda = 'zvezdaText';
        let Text = 'textD'
        if (like) {
            Text += ' text'
        }
        if (important) {
            zvezda += ' zvezda'
        }

        return (
            <div className={'likeShow'}>
                <div className={Text}>
                    <div onClick={this.inLike}>{label}</div>
                    <div>like</div>
                </div>
                <div className={zvezda} onClick={this.inImportant}>zvezda</div>
                <button onClick={onDelete}>delete</button>
            </div>
        );
    }
}

export default List;