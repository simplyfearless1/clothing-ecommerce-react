import { useContext } from "react";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart";

import './cart-icon.scss';

const Cart = () => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <div className="cart__wrap" onClick={toggleIsCartOpen}>
            <ShoppingCart className="cart__icon"/>
            <span className="cart__item-count">0</span>
        </div>
    )
}
export default Cart