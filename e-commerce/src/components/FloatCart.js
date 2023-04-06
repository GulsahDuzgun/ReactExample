import React,{Component} from "react";

class FloatChart extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        let classes = ['float-chart'];

        if(!!this.props.isOpen)
            classes.push('float-cart--open');
        
        return (
            <div className={classes.join(" ")}>
                <div className="float-cart__close-btn" onClick={this.props.closeFloatCart}>
                    X
                </div>
                <div className="float-cart__content">
                    <div className="float-cart__header">
                        <span className="bag">
                            <span className="bag__quantity">3</span>
                        </span>
                        <span className="header-title">SACOLA</span>
                    </div>
                    <div className="float-cart__shelf-container">
                        <div className="shelf-item">
                            <div className="shelf-item__thumb">
                                <img src="#" />
                            </div>
                            <div className="shelf-item__details">
                                <p className="title">CAmisetas Corinthians 77</p>
                                <p className="desc">
                                    GGG| Preto e brancı <b/>
                                    Quantidade: 2
                                </p>
                            </div>
                            <div className="shelf-item__price">
                                <p>R$ 149,90</p>
                            </div>
                            <div className="clearfix"/>
                        </div>
                    </div>
                    <div className="float-cart__footer">
                        <div className="sub">SUBTOTAL</div>
                        <div className="sub-price">
                            <p className="sub-price__val">R$453,70</p>
                            <small className="sub-price__installment">QU EM ATE 37,43</small>
                        </div>
                        <div className="buy-btn">Finalizar Pedido</div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default FloatChart;