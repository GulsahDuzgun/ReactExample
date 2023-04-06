import React, {Component} from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import  { fetchProducts } from "../actions/productActions";

class ShelfContainer extends Component {
  
   componentWillMount() {
    this.props.fetchProducts();
   }

    addToChart (sku) {
        this.props.openFloatChart();
        console.log(sku)
    }

    render() {
        const products = this.props.products.map(p => {
            return (
                <Product product={p} addToChart={this.addToChart} key={p.sku} />
            );
        });

        return (
            <div className="shelf-container">
                {products}
            </div>
        )
    }
}

ShelfContainer.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    products:state.products.items
})

export default connect (mapStateToProps, { fetchProducts })(ShelfContainer);