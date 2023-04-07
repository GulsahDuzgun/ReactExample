import './App.css';
import React, {Component} from 'react';
import ShelfContainer from './components/ShelfContainer'
import FloatChart from './components/FloatCart';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ShelfContainer />
          <FloatChart />
        </div>
      </Provider>
    );
  }
}

export default App;
