import './App.css';
import React, {Component} from 'react';

class App extends Component() {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('//localhost:8001/api/products')
    .then(res => res.json())
    .then( (json) => {
      const products = json.products;
      this.setState({products})//products:products
    })
  }

  render() {
    console.log(this.state.products)
    
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
