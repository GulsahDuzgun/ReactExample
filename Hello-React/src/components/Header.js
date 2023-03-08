import React from "react";
class Header extends React.Component{
    render(){
            return(
            <div>
                    <h1 id="header1">My First React Application!</h1>
                    <h2> {this.props.length} ürün seçilmiştir </h2>
            </div>
            );
    }
}
export default Header;