import './App.css';
import React, {Component} from 'react';
import ShelfContainer from '../components/ShelfContainer'
import FloatChart from '../components/FloatCart';

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
    this.setState({
      isFloatCartOpen: true
    })
  }

  closeFloatChart() {
    this.setState({
      isFloatCartOpen: false
    })
  }

  render() {
    return (
      <div className="App">
        <ShelfContainer openFloatCart={this.openFloatCart}/>
        <FloatChart 
          closeFloatChart={this.closeFloatChart}
          isOpen={this.state.isFloatCartOpen}
        />
      </div>
    );
  }
}

export default App;
