import React from "react";

class SelectedProduct extends React.Component{

    render(){
        return(
            <ol className="list-group list-group-numbered">
                {
                    this.props.products.map((item,index)=>(
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                {item.product.name}
                            </div>
                            <span className="badge bg-primary rounded-pill me-2">{item.counter}</span>
                        </li>
                    ))
                }
            </ol>
        )
    }
}

export default SelectedProduct;