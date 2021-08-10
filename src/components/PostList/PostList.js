import React, {Component} from 'react';
import PostListItem from "./PostListItem/PostListItem";
import './post-list.css'
class PostList extends Component {
    render() {
        const {data, onToggleImportant, onToggleLiked, onDelete} = this.props
        return (
            <ul className='app-list list-group'>
                {
                    data.map(item => {
                        return (
                            <li key={item.id} className='list-group-item'>
                                <PostListItem
                                    onToggleImportant={()=> onToggleImportant(item.id)}
                                    onToggleLiked={()=> onToggleLiked(item.id)}
                                    onDelete={()=> onDelete(item.id)}
                                    {...item}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default PostList;