import React from "react";

class Header extends React.Component {
    render() {
        return(
            <nav className="bg-primary text-white ">
                    <h1 id="header1">My First React Application!</h1>
                    <h2> {this.props.length} ürün seçilmiştir </h2>
            </nav>
        );
    }
}

export default Header;