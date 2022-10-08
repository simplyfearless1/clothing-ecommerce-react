import ProductItem from "../product-item/product-item";

import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
    return(
        <div className="category__wrap">
            <h2>
                <span className="category__title">{ title.toUpperCase() }</span>
            </h2>
            <div className="category__grid">
                { 
                    products.filter((_, idx) => idx < 4 )
                    .map((product) => {
                        return <ProductItem key={product.id} product={product} />
                    })
                }
            </div>
        </div>
    )
}
export default CategoryPreview