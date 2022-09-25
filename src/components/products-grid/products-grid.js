import ProductItem from "../product-item/product-item";

import "./products-grid.scss";

const ProductsGrid = ( { products } ) => {
    return(
        <div className="products-grid">
            { products.map((product) => (
                <ProductItem key={product.id} product={product} />
            )) }
        </div>
    )
}
export default ProductsGrid