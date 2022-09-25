import { useContext } from "react"

import { CartContext } from "../../contexts/cart"

import Button from "../button/button"
import CartItem from "../cart-item/cart-item"

import "./cart-dropdown.scss"

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)

    return(
        <div className="cart-dropdown__wrap">
            <div className="cart-dropdown__items">
                { cartItems.length > 0 ? cartItems.map((item) => <CartItem key={ item.id } cartItem={ item } /> ): <span className="cart-dropdown__empty-message">Cart is empty</span> }
            </div>
            <Button>Checkout</Button>
        </div>
    )
}
export default CartDropdown