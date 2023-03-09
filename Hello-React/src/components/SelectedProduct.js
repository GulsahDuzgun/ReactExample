import React from "react";

class SelectedProduct extends React.Component{

    render(){
        return(
            <ol className="list-group list-group-numbered">
                {
                    this.props.products.map((item,index)=>(
                        <li className="list-group-item">{item.name}</li>
                    ))
                }
            </ol>
        )
    }
}

export default SelectedProduct;