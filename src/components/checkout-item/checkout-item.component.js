import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {CheckoutItemContainer, ItemImageContainer, ContentContainer, Quantity, ProductRemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {

    const { name, quantity, imageUrl, price } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext)

    return (
        <CheckoutItemContainer>
            <ItemImageContainer>
                <img src={ imageUrl } alt={ name } />
            </ItemImageContainer>
            <ContentContainer>
                { name }
            </ContentContainer>
            <Quantity>
                <button onClick={ () => removeItemToCart(cartItem)} className="arrow">&#10094;</button>
                <span className="value">{ quantity }</span>
                <button onClick={ () => addItemToCart(cartItem) }  className="arrow">&#10095;</button>    
            </Quantity>
            <ContentContainer>
                { price }
            </ContentContainer>
            <ProductRemoveButton onClick={ () => clearItemFromCart(cartItem) }>&#10005;</ProductRemoveButton>
        </CheckoutItemContainer>
    )
}
export default CheckoutItem