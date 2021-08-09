import './App.css';
import State1 from "./components/State";
import List from "./components/List/List";
const posts = [
    {label: 'Privet kak dela', important: false, id: 1},
    {label: 'Privet kak tvoi dela', important: true, id: 2},
    {label: 'Privet chem dela', important: true, id: 3},
]
function App() {
    const elements = posts.map((item, id) => {
        return (
            <List key={id} {...item}/>
        )
    })
  return (
      <>
          {/*<State1 />*/}
          {elements}
      </>
  );
}

export default App;
