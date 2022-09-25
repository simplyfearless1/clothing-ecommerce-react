import { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import Button from "../button/button";

import "./product-item.scss";

const ProductItem = ({ product }) => {

    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return(
        <div className="product-item__wrap">
            <img src={ imageUrl } alt={ name } />
            <div className="product-item__content">
                <span className="product-item__content__name">{ name }</span>
                <span className="product-item__content__price"> { price }</span>
            </div>
            <Button buttonType='inverted' onClick={ addProductToCart }>Add to Cart</Button>
        </div>
    )
}
export default ProductItem