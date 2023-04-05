import React, {Component} from "react";
import Product from "./Product";

class ShelfContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.addToChart = this.addToChart.bind(this)
    }

    componentDidMount() {
        this.fetchProducts()
        .then(json => {
            const products = json.products;
            this.setState({products})
        }).catch( err => {
            console.log(err);
            throw new Error ('Não foi possível obter os prodtos. Tente novamente mais tarde.');
        });
    }

    async fetchProducts(callback) {
        const res = await fetch('//localhost:8080/api/products');
        const json = await res.json();
        
        return json;
    }

    addToChart (sku) {
        this.props.openFloatChart();
        console.log(sku)
    }

    render() {
        const products = this.state.products.map(p => {
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

export default ShelfContainer;