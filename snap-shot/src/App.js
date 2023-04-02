import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Initial from './components/Initial';
import Mountain from './components/Mountain';
import Beach from './components/Beach';
import Bird from './components/Bird';
import Food from './components/Food';
import Search from './components/Search';
import NotFound from './components/NotFound';

class App extends  React.Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    
    let url = `/search/${searchInput}`
    history.push(url)
  }

  render(){
    return (
      <BrowserRouter>
        <div className="container">
            <Route render={props => <Header handleSubmit={this.handleSubmit} history={props.history}/>} />
            <Switch>
                <Route exact path="/" component={Initial}/>
                <Route path="/mountain" render={() => <Mountain searchTerm="mountain"/>} />
                <Route path="/beach" render={() => <Beach searchTerm="beach"/>}/>
                <Route path="/bird" render={() => <Bird searchTerm="bird"/>} />
                <Route path="/food" render={() => <Food searchTerm="food"/>} />
                <Route path="/search/:searchInput" render={(props) => <Search searchTerm={props.match.params.searchInput} />} />
                <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;