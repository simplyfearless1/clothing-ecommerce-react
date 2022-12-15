import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button, { button_types } from "../button/button.component";

import { ProductImage, ProductItemContainer, ProductPrice, ProductName, Content } from "./product-item.styles";

const ProductItem = ({ product }) => {

    const { name, price, imageUrl } = product
    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return(
        <ProductItemContainer>
            <ProductImage src={ imageUrl } alt={ name } />
            <Content>
                <ProductName>{ name }</ProductName>
                <ProductPrice>{ price }</ProductPrice>
            </Content>
            <Button buttonType={button_types.inverted} onClick={ addProductToCart }>Add to Cart</Button>
        </ProductItemContainer>
    )
}
export default ProductItem