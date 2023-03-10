import React from 'react';
import Navbar from './components/Navbar';
import UserList from'./components/UserList';
//http isteğini component oluşmadan hemen önce atmamız için life-cycle hooks yapısına ihtiyacımız var . Bunun için class yapısına dönüyoruz
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    fetch("https://api.github.com/users").then(response=>response.json())
    .then(data => this.setState({users:data})
      //console.log(this.state.users)
      )
  }
  render(){
    return (
      <div className="">
        <Navbar title="Github Finder" />
        <div className="container mt-3 ">
            <UserList users ={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
