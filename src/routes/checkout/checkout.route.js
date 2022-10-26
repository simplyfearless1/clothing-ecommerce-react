import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  Total,
  CheckoutContainer,
  CheckoutHeader,
  Content,
  ErrorMessage,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <Content>
          <span>Product</span>
        </Content>
        <Content>
          <span>Description</span>
        </Content>
        <Content>
          <span>Quantity</span>
        </Content>
        <Content>
          <span>Price</span>
        </Content>
        <Content>
          <span>Remove</span>
        </Content>
        <Content>
          <span>Product</span>
        </Content>
      </CheckoutHeader>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })
      ) : (
        <ErrorMessage>No items in cart</ErrorMessage>
      )}
      <Total>Total: &euro; {cartTotal}</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
