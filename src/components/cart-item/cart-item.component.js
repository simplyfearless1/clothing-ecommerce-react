import {CartItemContainer, Item, ItemContainer, Quantity } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {

    const { name, quantity, price, imageUrl } = cartItem

    return (
        <CartItemContainer>
            <img src={ imageUrl } alt={ name } />
            <ItemContainer>
                <Item>{name}</Item>
                <Quantity>{`${quantity} x ${price}`}</Quantity>
            </ItemContainer>
        </CartItemContainer>
    )
}
export default CartItem