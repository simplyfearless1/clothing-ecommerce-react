import { useContext } from "react"

import { CartContext } from "../../contexts/cart"

import { useNavigate } from "react-router-dom"

import Button from "../button/button"
import CartItem from "../cart-item/cart-item"

import "./cart-dropdown.scss"

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <div className="cart-dropdown__wrap">
            <div className="cart-dropdown__items">
                { cartItems.length > 0 ? cartItems.map((item) => <CartItem key={ item.id } cartItem={ item } /> ): <span className="cart-dropdown__empty-message">Cart is empty</span> }
            </div>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    )
}
export default CartDropdown