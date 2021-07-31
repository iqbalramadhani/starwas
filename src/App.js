import './App.css';
// import Todo from './components/todo/todo';
import { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Starwars Web Application</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="App">
//       <Todo/>
//     </div>
//   )
// }

export default App;