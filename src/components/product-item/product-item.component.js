import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { button_types } from "../button/button.component";

import { ProductImage, ProductItemContainer, ProductPrice, ProductName, Content } from "./product-item.styles";

const ProductItem = ({ product }) => {

    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

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