import React from "react";

class SelectedProduct extends React.Component {
    render() {

        return (
            <div>
                {
                    (this.props.products.length == 0) ?
                        <div className="alert alert-warning">Seçilen ürün bulunmamaktadır</div> 
                    :
                    <ol className="list-group list-group-numbered">   
                    { 
                        this.props.products.map((item,index) =>(
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto"> {item.product.name}</div>
                                <span className="badge bg-primary rounded-pill me-2">{item.counter}</span>
                                <span className="badge bg-danger rounded-pill me-2" onClick={()=>this.props.delete(item.product)}>X</span>
                            </li> 
                        ))
                    }
                    </ol>
                }
            </div>
        )
    }
}

export default SelectedProduct;