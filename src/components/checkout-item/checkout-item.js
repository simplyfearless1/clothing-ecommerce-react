import { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {

    const { name, quantity, imageUrl, price } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext)

    return (
        <div className="checkout-item__wrap">
            <div className="checkout-item__img">
                <img src={ imageUrl } alt={ name } />
            </div>
            <span className="checkout-item__name">
                { name }
            </span>
            <span className="checkout-item__quantity">
                <button onClick={ () => removeItemToCart(cartItem)} className="arrow">&#10094;</button>
                <span className="value">{ quantity }</span>
                <button onClick={ () => addItemToCart(cartItem) }  className="arrow">&#10095;</button>
            </span>
            <span className="checkout-item__price">
                { price }
            </span>
            <div className="checkout-item__remove-button" onClick={ () => clearItemFromCart(cartItem) }>&#10005;</div>
        </div>
    )
}
export default CheckoutItem