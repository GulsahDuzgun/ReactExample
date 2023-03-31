import React from "react"

class Product extends React.Component {
    render() {
        return(
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`img/${this.props.item.image}`} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ this.props.item.name }</h5>
                            <p>{ this.props.item.price }</p>
                            <button type="button" className="btn btn-sm btn-outline-primary" onClick = {()=>this.props.showProduct(this.props.item)} >Ekle</button>                    
                        </div>
                    </div>
                </div>
            </div>
        )            
    }
}

export default Product;