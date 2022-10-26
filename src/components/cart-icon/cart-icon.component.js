import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ShoppingSvg, CartIconContainer, ItemCount } from "./cart-icon.styles";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingSvg />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default Cart;
