import React from "react";

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:"65841330",
            name:"Gülşah Düzgün",
            username:"GulsahDuzgun",
            avatar_url:"https://avatars.githubusercontent.com/u/65841330?v=4",
            github_url:"https://api.github.com/GulsahDuzgun",
            website:"#",
            followers:"1"
        }
    }
    render(){
        return(
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img className="img-fluid rounded-start" src={this.state.avatar_url} alt={this.state.username} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className="card-title">{this.state.username}</h3>
                            <p>Followers: {this.state.followers}</p>
                            <a target="_blank" href={this.state.github_url} className="btn btn-outline-primary me-2">Github Profile</a>
                            <a target="_blank" href={this.state.website} className="btn btn-outline-success">WebSite</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default User;