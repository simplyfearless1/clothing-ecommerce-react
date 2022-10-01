import { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import CheckoutItem from "../../components/checkout-item/checkout-item";

import "./checkout.scss";

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="checkout__wrap">
            <div className="checkout__header">
                <div className="checkout__header__block">
                    <span>Product</span>
                </div>
                <div className="checkout__header__block">
                    <span>Description</span>
                </div>
                <div className="checkout__header__block">
                    <span>Quantity</span>
                </div>
                <div className="checkout__header__block">
                    <span>Price</span>
                </div>
                <div className="checkout__header__block">
                    <span>Remove</span>
                </div>                                                                
            </div>
            {
                cartItems.length > 0 ?
                cartItems.map((cartItem) => {
                    return <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
                })
                : <p>No items in cart</p>
            }
            <p className="total">Total: &euro; { cartTotal }</p>
        </div>
    )
}
export default Checkout