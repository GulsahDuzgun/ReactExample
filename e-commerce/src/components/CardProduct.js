import React, {Component} from "react";
import util from "../util";

class CardProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMouseOver: false
        }
    }

    handleMouseOver() {
        this.setState({isMouseOver: true});
    }

    handleMouseOut() {
        this.setState({isMouseOver: false})
    }

    render() {
        const product = this.props.product;
        const classes = ['shelf-item'];

        if(!!this.state.isMouseOver) {
            classes.push('shel-item--mouseover');
        }

        return (
            <div className={classes.join(' ')}>
                <div onClick={() => this.props.removeProduct(product)} onMouseOver={() => this.handleMouseOver} onMouseOut={() => this.handleMouseOut()} className="shelf-item__del">
                    <div className="shelf-item__thumb">
                        <img src={require(`../static/products/${product.sku}_2.jpg`)} alt={product.title} />
                    </div>
                    <div className="shelf-item__details">
                        <p className="title">{product.title}</p>
                        <p className="desc">
                            GGG | Preto e branco <br />
                            Quantidade: {product.quantity}
                        </p>
                    </div>
                    <div className="shelf-item__price">
                        <p>R${util.formatPrice(product.price)}</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>   
        )
    }
}

export default CardProducts;