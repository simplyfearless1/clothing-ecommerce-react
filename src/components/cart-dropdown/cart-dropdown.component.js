import { useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"
import { selectCartItems } from "../../store/cart/cart.selector"

import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import { CartDropdownContainer, CartItemsContainer, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);

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