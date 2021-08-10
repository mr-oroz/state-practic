import React, {Component} from 'react';
import './post-add-form.css'
class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onValueChange = (e) => {
        console.log(e.target.value)
        this.setState({
            text: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddItem(this.state.text)
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className='bottom-panel d-flex'>
                <input
                    onChange={this.onValueChange}
                    className='form-control new-post-label'
                    type="text"
                    value={this.state.text}
                    placeholder='О чем вы думаете сейчас?'/>
                <button
                    type='submit'
                    className='btn btn-outline-secondary'
                >Добавить</button>
            </form>
        );
    }
}

export default PostAddForm;