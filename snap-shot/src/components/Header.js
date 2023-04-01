import React from "react";
import Form from "./Form"
import Navigation from "./Navigation"

function Header(props) {
    return (
        <div>
            <h1>Snap Shot &trade; </h1>
            <Form history={props.history} handleSubmit={props.handleSubmit} />
            <Navigation/>
        </div>
    )
}

export default Header;