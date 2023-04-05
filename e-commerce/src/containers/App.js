import './App.css';
import React, {Component} from 'react';
import ShelfContainer from '../components/ShelfContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShelfContainer/>
      </div>
    );
  }
}

export default App;
