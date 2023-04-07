import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCart, removeProduct } from '../actions/floatCardActions';
import CartProduct from './CardProduct';
import util from "../util";

class FloatCart extends Component {
  constructor(props){
    super(props);
    //console.log(props)
    this.state = {
      isOpen: false,
      cartTotals:{}
    }

    this.openFloatCart = this.openFloatCart.bind(this);
    this.closeFloatCart = this.closeFloatCart.bind(this);
    

  }

  componentWillMount() {
    this.props.loadCart();
    this.updateCart();
  }

  updateCart() {
    let productQuantity = this.props.cartProducts.reduce((sum, p) => {
      sum += p.quantity; 
      return sum;
    },0);

    let totalPrice = this.props.cartProducts.reduce((sum, p) => {
      sum += p.price * p.quantity;
      return sum;
    },0);

    let installments = this.props.cartProducts.reduce((greater, p) => {
      greater = p.installments > greater ? p.installments : greater
      return greater;
    },0);

    let cartTotals = {
      productQuantity,
      installments,
      totalPrice
    }

    this.setState({cartTotals})
    console.log('quant:', productQuantity);
  }

  addProduct(product) {
    const cartProducts = this.props.cardProducts;
    let productAlreadyInCart = false;

    for(var i = 0; i < cartProducts.length; i++) {
      if(cartProducts[i].sku === product.sku) {
        cartProducts[i].quantity += product.quantity;
        productAlreadyInCart = true;
      }
    }

    if(!productAlreadyInCart) {
      this.props.cartProducts.push(product);
    }

    this.updateCart();
    this.openFloatCart();
  }

  removeProduct(product) {
    const cartProducts = this.props.cartProducts;
    const index = cartProducts.findIndex(p => p.sku === product.sku);
    if(index >= 0) {
      cartProducts.splice(index, 1);
      this.updateCart();
    }
  }

  componentWillReceiveProps(nextProps) {
    let cartProducts = this.props.cartProducts;
    
    if(nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if(nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openFloatCart() {
    document.body.style.overflow = "hidden";
    this.setState({ isOpen: true });
  }

  closeFloatCart() {
    document.body.style.overflow = "initial";
    this.setState({ isOpen: false });
  }

  render() {
    const cartTotals = this.state.cartTotals;

    const cartProducts = this.props.cartProducts.map(p => {
      return <CartProduct
        product={p}
        removeProduct={this.props.removeProduct}
        key={p.sku}
      />;
    });

    let classes = ["float-cart"];

    if (!!this.state.isOpen){
      classes.push("float-cart--open");
    }

    return (
      <div className={classes.join(" ")}>
        <div onClick={() => this.closeFloatCart()} className="float-cart__close-btn">
          X
        </div>
        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotals.productQuantity}</span>
            </span>
            <span className="header-title">SACOLA</span>
          </div>
          <div className="float-cart__shelf-container">{cartProducts}</div>
          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">R$ {cartTotals.totalPrice}</p>
              <small className="sub-price__installment">
                OU EM ATÉ {cartTotals.installments} x R$ {util(cartTotals.totalPrice/cartTotals.installments)}
              </small>
            </div>
            <div className="buy-btn">Finalizar Pedido</div>
          </div>
        </div>
      </div>
    );
  }
}

FloatCart.prototypes = {
  loadCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  newProduct: PropTypes.object,
  removeProduct: PropTypes.func,
  productToRemove: PropTypes.object
};

const mapStateToProps = state => ({
  cartProducts: state.cardProducts.items,
  newProduct: state.cardProducts.item,
  productToRemove: state.cardProducts.itemToRemove,
});

export default connect(mapStateToProps, {  loadCart, removeProduct })(FloatCart);

