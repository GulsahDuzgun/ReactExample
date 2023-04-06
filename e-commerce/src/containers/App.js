import './App.css';
import React, {Component} from 'react';
import ShelfContainer from '../components/ShelfContainer'
import FloatChart from '../components/FloatCart';
import { Provider } from 'react-redux';
import store from '../store'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isFloatCartOpen: false 
    }

    this.openFloatCart = this.openFloatCart.bind(this)
    this.openFloatCart = this.openFloatCart.bind(this)
  }

  openFloatCart() {
    document.body.style.overflow = "hidden"
    this.setState({
      isFloatCartOpen: true
    })
  }

  closeFloatChart() {
    document.body.style.overflow = "initial"
    this.setState({
      isFloatCartOpen: false
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ShelfContainer openFloatCart={this.openFloatCart}/>
          <FloatChart 
            closeFloatChart={this.closeFloatChart}
            isOpen={this.state.isFloatCartOpen}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
