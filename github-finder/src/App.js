import React from 'react';
import Navbar from './components/Navbar';
import UserList from'./components/UserList';
//http isteğini component oluşmadan hemen önce atmamız için life-cycle hooks yapısına ihtiyacımız var . Bunun için class yapısına dönüyoruz
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loadingFlag:false,
      users:[]
    }
  }
  //componentDidMount yüklenme aşamasıdır aslında bittiğinde virtual Dom -> DOM'a yüklenmiş olur
  componentDidMount(){
    this.setState({loadingFlag:true})//istek atıldı->Spinner gösterilir
    setTimeout(()=>{
      fetch("https://api.github.com/users").then(response=>response.json())
      .then(data => this.setState({users:data,loadingFlag:false})//data geldi spinner kaldırılır
        //console.log(this.state.users)
        )
    },1000)
  }
  searchResult=(searchKey)=>{
    fetch(`https://api.github.com/search/users?q=${searchKey}`)
    .then(response =>response.json())
    .then((data)=>this.setState({users:data.items}))
  }
  render(){
    return (
      <div>
        <Navbar title="Github Finder" onSearch={this.searchResult} />
        <div className="container mt-3 ">
            <UserList users ={this.state.users} loading={this.state.loadingFlag}/>
        </div>
      </div>
    );
  }
}

export default App;
