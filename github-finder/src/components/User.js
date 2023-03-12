import React from "react";

const User=(props)=>{
    const {avatar_url,login,html_url} = props.userItem
    return(
        <div className="card mb-3 col-8 offset-2">
            <div className="row g-0">
                <div className="col-md-3">
                    <img className="img-fluid rounded-start avatar" src={avatar_url} alt={login} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h3 className="card-title">{login}</h3>
                        <a target="_blank" href={html_url} rel="noreferrer" className="btn btn-outline-success btn-sm me-2">Github Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )     
    
}
export default User;