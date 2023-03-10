import React from "react";

class User extends React.Component{
    render(){
        const {avatar_url,username,followers,github_url,website,name} =this.props.userItem
        return(
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img className="img-fluid rounded-start avatar" src={avatar_url} alt={username} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p>Followers: {followers}</p>
                            <a target="_blank" href={github_url} className="btn btn-outline-primary me-2">Github Profile</a>
                            <a target="_blank" href={website} className="btn btn-outline-success">WebSite</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default User;