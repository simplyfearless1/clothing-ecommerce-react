import { useSelector, useDispatch } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ItemImageContainer,
  ContentContainer,
  Quantity,
  ProductRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const removeCartItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const addCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const clearCartItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ItemImageContainer>
        <img src={imageUrl} alt={name} />
      </ItemImageContainer>
      <ContentContainer>{name}</ContentContainer>
      <Quantity>
        <button onClick={removeCartItemHandler} className="arrow">
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button onClick={addCartItemHandler} className="arrow">
          &#10095;
        </button>
      </Quantity>
      <ContentContainer>{price}</ContentContainer>
      <ProductRemoveButton onClick={clearCartItemHandler}>
        &#10005;
      </ProductRemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
