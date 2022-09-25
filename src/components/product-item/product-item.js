import "./product-item.scss";

import Button from "../button/button";

const ProductItem = ({ product }) => {

    const { name, price, imageUrl } = product

    return(
        <div className="product-item__wrap">
            <img src={ imageUrl } alt={ name } />
            <div className="product-item__content">
                <span className="product-item__content__name">{ name }</span>
                <span className="product-item__content__price"> { price }</span>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>
        </div>
    )
}
export default ProductItem