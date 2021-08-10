import React, {Component} from 'react';
import './post-list-item.css';
class PostListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     }
    // }
    //
    // onImportant = () => {
    //     this.setState(({important}) =>({
    //         important: !important
    //     }))
    // }
    // onLike = () => {
    //     this.setState(({like}) =>({
    //         like: !like
    //     }))
    // }

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, like, important} = this.props
        let classNames = 'app-list-item d-flex justify-content-between'
        if (important) {
            classNames += ' important'
        }
        if (like) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
                <span
                    onClick={onToggleLiked}
                    className={'app-list-item-label'}>
                    {label}
                </span>
                <div className={'d-flex ustify-content-center align-items-center'}>
                    <button
                        onClick={onToggleImportant}
                        type='button'
                        className='btn-star btn-sm'>
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        onClick={onDelete}
                        type='button'
                        className='btn-trash btn-sm'>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}

export default PostListItem;