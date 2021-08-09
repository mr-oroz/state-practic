import './App.css';
import React from 'react'
import State1 from "./components/State";
import List from "./components/List/List";

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           posts : [
               {label: 'Privet kak dela', important: false, id: 1},
               {label: 'Privet kak tvoi dela', important: true, id: 2},
               {label: 'Privet chem dela', important: true, id: 3},
           ]
       }
   }
   onDelete = (id) => {
        this.setState(({posts}) => {
            const index = posts.findIndex(elem => elem.id !== id)
            const before = posts.slice(0, index);
            const after = posts.slice(index + 1)
            const newArr = [...before, ...after]
            return {
                posts: newArr
            }
        })
   }
    render() {
        const elements = this.state.posts.map(item => {
            const {id, ...itemProps} = item
            return (
                <List key={id} {...itemProps} onDelete={(id) => this.onDelete(id)}/>
            )
        })
        return (
            <>
                {/*<State1 />*/}
                {elements}
            </>
        )
    }
}

export default App;
