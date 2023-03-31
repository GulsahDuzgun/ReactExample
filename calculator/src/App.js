import React from 'react';
import Display from '../src/components/Display';
import ButtonPanel from '../src/components/ButtonPanel';
import Calculate from './logic/Calculate'
import './styles/App.css'

class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick = (buttonName) => {
   this.setState( Calculate(this.state, buttonName) )
  }

  render() {

    return (
      <div className='component-app'>
        <Display value={ this.state.next || this.state.total || '0' }/>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
