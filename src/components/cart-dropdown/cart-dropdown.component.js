import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import { useNavigate } from "react-router-dom"

import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import { CartDropdownContainer, CartItemsContainer, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            <CartItemsContainer>
                { cartItems.length > 0 ? cartItems.map((item) => <CartItem key={ item.id } cartItem={ item } /> ) : <EmptyMessage>Cart is empty</EmptyMessage> }
            </CartItemsContainer>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    )
}
export default CartDropdown