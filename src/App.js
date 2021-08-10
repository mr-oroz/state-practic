import React from 'react'
import PostList from "./components/PostList/PostList";
import Header from "./components/Header/Header";
import SearchPanel from "./components/searchPanel/SearchPanel";
import PostStatusFilter from "./components/PostStatusFilter/PostStatusFilter";
import PostAddForm from "./components/PostAddFrom/PostAddForm";
import './app.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Privet kak dela', important: true, like: false, id: '1'},
                {label: 'Privet kak tvoi dela', important: false, like: false, id: '2'},
                {label: 'Privet chem dela', important: false, like: false, id: '3'},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        console.log(id)
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            return {
                data: newArr
            }
            // data.splice(index, 1)
            // return {
            //     data: data
            // }
        })
    }

    onAddItem = (body) => {
        // console.log(body)
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = {...old, important: !old.important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }
    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }
    onUpdataSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(elem => elem.like)
        } else {
            return items
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter})
    }
    render() {
        const {data, term, filter} = this.state;
        const liked = this.state.data.filter(item => item.like).length;
        const allPost = this.state.data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)
        return (
            <div className={"app"}>
                <Header
                    liked={liked}
                    allPost={allPost}/>
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onUpdataSearch={this.onUpdataSearch}
                    />
                    <PostStatusFilter
                        onFilterSelect={this.onFilterSelect}
                        filter={filter}
                    />
                </div>
                <PostList
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    onDelete={this.deleteItem}
                    data={visiblePosts}/>
                <PostAddForm
                    onAddItem={this.onAddItem}
                />
            </div>
        )
    }
}

export default App;
